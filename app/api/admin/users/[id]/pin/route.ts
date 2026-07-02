import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { pin, withdrawalPinPaid } = body as {
      pin?: string;
      withdrawalPinPaid?: boolean;
    };

    const data: any = {};

    if (typeof pin === "string" && pin.length > 0) {
      const hashed = crypto.createHash("sha256").update(pin).digest("hex");
      data.withdrawalPin = hashed;
    }

    if (typeof withdrawalPinPaid === "boolean") {
      data.withdrawalPinPaid = withdrawalPinPaid;
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data,
      select: { id: true, withdrawalPinPaid: true },
    });

    return NextResponse.json({ id: user.id, withdrawalPinPaid: user.withdrawalPinPaid });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update pin" }, { status: 500 });
  }
}
