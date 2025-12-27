// app/(Root)/buy/page.tsx
import CallToAction from "@/components/call-to-action";
import BuyForm from "@/components/buy-form";

export default function BuyPage() {
  return (
    <main>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-balance text-4xl font-medium md:text-5xl">
              Buy Crypto
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Buy BTC, ETH, USDT and more using a variety of payment methods.
              Secure, fast, and integrated with our platform so funds appear in
              your account promptly after confirmation.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold">Fast settlements</h3>
                <p className="text-muted-foreground text-sm">
                  Most crypto payments are reflected in your account after a few
                  network confirmations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Multiple payment methods</h3>
                <p className="text-muted-foreground text-sm">
                  Choose between crypto transfers, bank transfers, PayPal and
                  other supported methods.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="mx-auto max-w-md rounded-2xl border bg-background p-6 shadow">
              <h2 className="mb-4 text-lg font-medium">Make a deposit</h2>
              <BuyForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold mb-4">How it works</h2>
          <p className="text-muted-foreground">
            Select an asset and amount, follow the instructions to complete the
            payment, and your balance will be updated when the payment is
            confirmed.
          </p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
