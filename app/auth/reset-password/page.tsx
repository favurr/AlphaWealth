import ResetPasswordPage from "@/components/reset-password";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reset Password — Modernize",
  description: "Reset your Modernize password if you've forgotten it.",
  keywords: ["reset password", "Modernize", "authentication"],
  authors: [{ name: "Modernize" }],
};

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResetPasswordPage />
    </Suspense>
  );
};

export default page;