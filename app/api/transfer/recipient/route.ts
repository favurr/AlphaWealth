import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const suffix = url.searchParams.get("suffix")?.trim() ?? "";

    if (suffix.length !== 6) {
      return NextResponse.json(
        { error: "Recipient suffix must be 6 characters." },
        { status: 400 },
      );
    }

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const recipient = await prisma.user.findFirst({
      where: {
        id: {
          endsWith: suffix,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!recipient) {
      return NextResponse.json({ error: "Recipient not found" }, { status: 404 });
    }

    if (recipient.id === session.user.id) {
      return NextResponse.json(
        { error: "Cannot transfer to yourself" },
        { status: 400 },
      );
    }

    return NextResponse.json({ recipient });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to resolve recipient" },
      { status: 500 },
    );
  }
}
