import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/footer";
import AutoToast from "@/components/AutoToast";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <HeroHeader />
      {children}
      <Footer />
      <AutoToast />
      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{
          className: "mb-20",
        }}
      />
    </main>
  );
}
