import ResetPasswordPage from "@/components/reset-password";
import { Suspense } from "react";

type Props = {
  params: {
    token: string;
  };
};

export default async function Page(props: any) {
  const { params } = await props;
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResetPasswordPage tokenProp={params.token} />
    </Suspense>
  );
}
