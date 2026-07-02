import ResetPasswordPage from "@/components/reset-password";

type Props = {
  params: {
    token: string;
  };
};

export default async function Page(props: any) {
  const { params } = await props;
  return <ResetPasswordPage tokenProp={params.token} />;
}
