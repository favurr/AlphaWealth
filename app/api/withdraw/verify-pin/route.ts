import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const pin = typeof body?.pin === "string" ? body.pin : "";

    if (pin.length !== 6) {
      return NextResponse.json(
        { error: "Invalid withdrawal PIN" },
        { status: 400 },
      );
    }

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { withdrawalPin: true },
    });

    if (!user?.withdrawalPin) {
      return NextResponse.json(
        { error: "Withdrawal PIN not configured" },
        { status: 400 },
      );
    }

    const hashedPin = crypto.createHash("sha256").update(pin).digest("hex");
    if (hashedPin !== user.withdrawalPin) {
      return NextResponse.json({ error: "Invalid withdrawal PIN" }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to verify withdrawal PIN" },
      { status: 500 },
    );
  }
}
