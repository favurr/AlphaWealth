"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactWidget() {
  return (
    <div className="w-full">
      <Card className="p-4">
        <h2 className="text-lg font-medium">Need help?</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Send us a message and we'll get back to you within one business day.
        </p>

        <form className="space-y-3">
          <div>
            <Label htmlFor="cw-name">Name</Label>
            <Input id="cw-name" placeholder="Full name" />
          </div>

          <div>
            <Label htmlFor="cw-email">Email</Label>
            <Input id="cw-email" type="email" placeholder="you@company.com" />
          </div>

          <div>
            <Label htmlFor="cw-topic">Topic</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="account">Account & verification</SelectItem>
                <SelectItem value="deposit">Deposits & payments</SelectItem>
                <SelectItem value="withdraw">
                  Withdrawals & transfers
                </SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="cw-msg">Message</Label>
            <Textarea id="cw-msg" rows={3} />
          </div>

          <div className="flex justify-end">
            <Button size="sm">Send</Button>
          </div>
        </form>
      </Card>

      <Card className="mt-4 p-3">
        <h3 className="text-sm font-medium mb-2">Other ways to reach us</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>
            Email:{" "}
            <a className="underline" href="mailto:support@example.com">
              support@example.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a className="underline" href="tel:+18001234567">
              +1 (800) 123-4567
            </a>
          </li>
          <li>
            Support center:{" "}
            <a className="underline" href="/support">
              /support
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}
