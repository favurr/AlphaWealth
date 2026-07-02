import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
      return NextResponse.json({ user: null });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { withdrawalPinPaid: true, accumulativeBalance: true },
    });

    return NextResponse.json({
      user: {
        ...session.user,
        withdrawalPinPaid: user?.withdrawalPinPaid ?? false,
        accumulativeBalance: user?.accumulativeBalance ?? 0,
      },
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { user: null, message: err?.message },
      { status: 500 },
    );
  }
}
