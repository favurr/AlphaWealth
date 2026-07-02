"use server";

import { prisma } from "@/lib/prisma";

export type UpdateUserInput = {
  id: string;
  capital: number;
  accumulativeBalance: number;
  bonus: number;
  profit: number;
  tradeStatus: "LOSS" | "WIN";
  cryptoPlan: "SILVER" | "GOLD" | "DIAMOND" | "ELITE" | "EXCLUSIVE";
  withdrawalPin?: string;
  withdrawalPinPaid?: boolean;
};

import crypto from "crypto";

export async function updateUser(data: UpdateUserInput) {
  const updateData: any = {
    capital: data.capital,
    accumulativeBalance: data.accumulativeBalance,
    bonus: data.bonus,
    profit: data.profit,
    tradeStatus: data.tradeStatus,
    cryptoPlan: data.cryptoPlan,
  };

  if (typeof data.withdrawalPin === "string" && data.withdrawalPin.length > 0) {
    updateData.withdrawalPin = crypto
      .createHash("sha256")
      .update(data.withdrawalPin)
      .digest("hex");
  }

  if (typeof data.withdrawalPinPaid === "boolean") {
    updateData.withdrawalPinPaid = data.withdrawalPinPaid;
  }

  return prisma.user.update({
    where: { id: data.id },
    data: updateData,
  });
}

export async function deleteUser(userId: string) {
  return prisma.user.delete({
    where: { id: userId },
  });
}

export async function getUsers() {
  const users = await prisma.user.findMany({
    where: { role: "USER" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      capital: true,
      accumulativeBalance: true,
      bonus: true,
      profit: true,
      tradeStatus: true,
      cryptoPlan: true,
      withdrawalPin: true,
      withdrawalPinPaid: true,
    },
  });

  return users.map((user) => ({
    ...user,
    hasPin: Boolean(user.withdrawalPin),
  }));
}
