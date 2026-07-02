"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { TransactionType } from "../generated/prisma/enums";
import crypto from "crypto";

export async function transferFunds({
  recipientSuffix,
  amount,
  pin,
}: {
  recipientSuffix: string;
  amount: number;
  pin: string;
}) {
  // 1. Resolve session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // 2. Validate PIN against the stored hashed withdrawalPin and balance
  const sender = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { withdrawalPin: true, accumulativeBalance: true },
  });

  if (!sender?.withdrawalPin) {
    throw new Error("NO_WITHDRAWAL_PIN");
  }

  const hashedPin = crypto.createHash("sha256").update(pin).digest("hex");
  if (hashedPin !== sender.withdrawalPin) {
    throw new Error("INVALID_PIN");
  }

  if (amount > sender.accumulativeBalance) {
    throw new Error("INSUFFICIENT_FUNDS");
  }

  // 3. Resolve recipient by last 8 chars
  const recipient = await prisma.user.findFirst({
    where: {
      id: {
        endsWith: recipientSuffix,
      },
    },
    select: { id: true, name: true },
  });

  if (!recipient) {
    throw new Error("Recipient not found");
  }

  if (recipient.id === session.user.id) {
    throw new Error("CANNOT_TRANSFER_TO_SELF");
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: session.user.id },
      data: {
        accumulativeBalance: {
          decrement: amount,
        },
      },
    }),
    prisma.user.update({
      where: { id: recipient.id },
      data: {
        accumulativeBalance: {
          increment: amount,
        },
      },
    }),
    prisma.history.create({
      data: {
        userId: session.user.id,
        currency: "USD",
        amount,
        type: TransactionType.TRANSFERRED,
      },
    }),
    prisma.history.create({
      data: {
        userId: recipient.id,
        currency: "USD",
        amount,
        type: TransactionType.DEPOSITED,
      },
    }),
  ]);

  return { success: true, recipient: { name: recipient.name, id: recipient.id } };
}
