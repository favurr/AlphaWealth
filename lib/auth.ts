import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import { prisma } from "./prisma";
import { sendEmail } from "@/server/send-email";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 10,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      const { searchParams } = new URL(url);
      const token = searchParams.get("token");

      const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: "Verify Your EliteWealth Email Address",
        meta: {
          description: `Thank you for creating an EliteWealth account.

                      To complete your registration and secure your account,
                      please verify your email address by clicking the button below.`,
          link: verificationUrl,
        },
      });
    },
  },
  socialProviders: {
    google: {
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["USER", "ADMIN"],
        input: false,
      },
    },
  },
  session: {
    expiresIn: 30 * 24 * 60 * 60, // 30 days
  },
  plugins: [nextCookies(),],
  trustedOrigins: [String(process.env.NEXT_PUBLIC_BASE_URL)],
});

export type Errorcode = keyof typeof auth.$ERROR_CODES | "UNKNOWN_ERROR";
