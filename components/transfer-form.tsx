"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { transferFunds } from "@/server/transferFunds";

/* ---------------- Constants ---------------- */

const USER_ID_SUFFIX_LENGTH = 6;

/* ---------------- Schemas ---------------- */

const transferSchema = z.object({
  recipientIdSuffix: z
    .string()
    .length(
      USER_ID_SUFFIX_LENGTH,
      `Must be exactly ${USER_ID_SUFFIX_LENGTH} characters`,
    ),
  amount: z.number().positive("Amount must be greater than zero"),
});

type TransferValues = z.infer<typeof transferSchema>;

const pinSchema = z.object({
  pin: z.string().length(6, "PIN must be 6 digits"),
});

type PinValues = z.infer<typeof pinSchema>;

/* ---------------- Component ---------------- */

export default function TransferForm() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [hasPaidPin, setHasPaidPin] = useState<boolean | null>(null);
  const [currentBalance, setCurrentBalance] = useState<number | null>(null);
  const [recipientPreview, setRecipientPreview] = useState<{
    name: string;
    email: string;
    id: string;
  } | null>(null);
  const [recipientLookupError, setRecipientLookupError] = useState<string | null>(null);
  const [pendingTransfer, setPendingTransfer] = useState<TransferValues | null>(
    null,
  );

  const transferForm = useForm<TransferValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      recipientIdSuffix: "",
    },
  });

  const pinForm = useForm<PinValues>({
    resolver: zodResolver(pinSchema),
  });

  const recipientIdSuffix = transferForm.watch("recipientIdSuffix");

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();
        setHasPaidPin(Boolean(data?.user?.withdrawalPinPaid));
        setCurrentBalance(data?.user?.accumulativeBalance ?? 0);
        if (!data?.user?.withdrawalPinPaid) {
          setInfoOpen(true);
        }
      } catch {
        setHasPaidPin(false);
        setCurrentBalance(0);
        setInfoOpen(true);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    if (recipientIdSuffix?.length !== USER_ID_SUFFIX_LENGTH) {
      setRecipientPreview(null);
      setRecipientLookupError(null);
      return;
    }

    let isCanceled = false;

    async function lookupRecipient() {
      try {
        const res = await fetch(
          `/api/transfer/recipient?suffix=${encodeURIComponent(
            recipientIdSuffix,
          )}`,
        );

        if (!res.ok) {
          const data = await res.json();
          if (!isCanceled) {
            setRecipientPreview(null);
            setRecipientLookupError(data?.error ?? "Recipient not found");
          }
          return;
        }

        const data = await res.json();
        if (!isCanceled) {
          setRecipientPreview(data.recipient ?? null);
          setRecipientLookupError(null);
        }
      } catch {
        if (!isCanceled) {
          setRecipientPreview(null);
          setRecipientLookupError("Unable to find recipient");
        }
      }
    }

    lookupRecipient();

    return () => {
      isCanceled = true;
    };
  }, [recipientIdSuffix]);

  /* ---------------- Handlers ---------------- */

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setSuccessOpen(true);
  };

  const handleTransferSubmit = (values: TransferValues) => {
    setPendingTransfer(values);

    if (currentBalance !== null && values.amount > currentBalance) {
      toast.error("Insufficient funds to complete this transfer.");
      return;
    }

    if (!recipientPreview) {
      toast.error("Please enter a valid recipient ID to continue.");
      return;
    }

    if (hasPaidPin) {
      setPinOpen(true);
    } else {
      setInfoOpen(true);
    }
  };

  const handlePinConfirm = async ({ pin }: PinValues) => {
    if (!pendingTransfer) return;

    try {
      await transferFunds({
        recipientSuffix: pendingTransfer.recipientIdSuffix,
        amount: pendingTransfer.amount,
        pin,
      });

      toast.success("Transfer request submitted successfully");

      setPinOpen(false);
      setPendingTransfer(null);
      transferForm.reset();
      pinForm.reset();
    } catch (err: any) {
      if (err.message === "INVALID_PIN") {
        toast.error("Invalid withdrawal PIN");
      } else {
        toast.error(err.message + " Please try again.");
      }
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* ================= INFO DIALOG ================= */}
      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>OPPS...</DialogTitle>
            <DialogDescription className="pt-2">
              You need to have a Withdrawal PIN in order to facilitate your
              withdrawal request. Please contact an agent for help on how to get
              one.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setInfoOpen(false)}>Understood</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ================= TRANSFER FORM ================= */}
      <Form {...transferForm}>
        <form
          onSubmit={transferForm.handleSubmit(handleTransferSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={transferForm.control}
            name="recipientIdSuffix"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient User ID</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Last ${USER_ID_SUFFIX_LENGTH} characters of User ID`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                {recipientPreview ? (
                  <p className="text-sm text-muted-foreground">
                    Recipient: {recipientPreview.name} ({recipientPreview.email})
                  </p>
                ) : recipientIdSuffix?.length === USER_ID_SUFFIX_LENGTH ? (
                  <p className="text-sm text-destructive">
                    {recipientLookupError ?? "No recipient found."}
                  </p>
                ) : null}
              </FormItem>
            )}
          />

          <FormField
            control={transferForm.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                  <FormControl>
                  <Input
                    type="number"
                    step="any"
                    placeholder="0.00"
                    {...field}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      field.onChange(Number(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
                {currentBalance !== null ? (
                  <p className="text-sm text-muted-foreground">
                    Available balance: ${currentBalance.toFixed(2)}
                  </p>
                ) : null}
              </FormItem>
            )}
          />

          <Button type="submit" className="w-fit">
            Continue
          </Button>
        </form>
      </Form>

      {/* ================= PIN DIALOG ================= */}
      <Dialog open={pinOpen} onOpenChange={setPinOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Withdrawal PIN</DialogTitle>
            <DialogDescription>
              Confirm this transfer by entering your 6-digit withdrawal PIN.
            </DialogDescription>
          </DialogHeader>

          <Form {...pinForm}>
            <form
              onSubmit={pinForm.handleSubmit(handlePinConfirm)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={pinForm.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Withdrawal PIN</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        maxLength={6}
                        inputMode="numeric"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setPinOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Confirm</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transfer Request Sent</DialogTitle>
            <DialogDescription>{successMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSuccessOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
