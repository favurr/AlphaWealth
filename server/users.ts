"use server";

import { auth, Errorcode } from "@/lib/auth";
import { headers } from "next/headers";
import { APIError } from "better-auth/api";
import { toast } from "sonner";

const getAppUrl = async () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "https";

  if (host) {
    return `${protocol}://${host}`;
  }

  return "http://localhost:3000";
};

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });

    return { success: true, message: "Sign-in successfully" };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to sign in",
          };
      }
    }
  }
};
export const signUpUser = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
      asResponse: true,
    });

    return { success: true, message: "Account Created" };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to sign in",
          };
      }
    }
  }
};

export const signOutUser = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return { success: true, message: "Sign-out successfully" };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to sign in",
          };
      }
    }
  }
};

export const getSession = async () => {
  try {
    return await auth.api.getSession({
      headers: await headers(),
    });
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to sign in",
          };
      }
    }
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const appUrl = await getAppUrl();

    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: `${appUrl}/auth/reset-password`,
      },
    });

    return { success: true, message: "Password reset requested" };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to request password reset",
          };
      }
    }
  }
};

export const resetPassword = async (newPassword: string, token: string) => {
  if (!token) {
    toast.error("No reset token was provided.");
    return;
  }

  try {
    await auth.api.resetPassword({
      body: {
        token,
        newPassword,
      },
    });
    return { success: true, message: "Password reset successfully" };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as Errorcode) : "UNKNOWN_ERROR";

      switch (errCode) {
        default:
          return {
            success: false,
            message: err.message || "Failed to reset password",
          };
      }
    }
  }
};
