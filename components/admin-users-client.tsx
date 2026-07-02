"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  withdrawalPinPaid?: boolean;
};

export default function AdminUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<User | null>(null);
  const [pin, setPin] = useState("");
  const [paid, setPaid] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openEdit = (u: User) => {
    setSelected(u);
    setPin("");
    setPaid(Boolean(u.withdrawalPinPaid));
  };

  const save = async () => {
    if (!selected) return;
    try {
      const res = await fetch(`/api/admin/users/${selected.id}/pin`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pin || undefined, withdrawalPinPaid: paid }),
      });

      if (!res.ok) throw new Error("Failed");
      const updated = await res.json();
      toast.success("Updated");
      setSelected(null);
      // update local list
      setUsers((prev) => prev.map((p) => (p.id === updated.id ? { ...p, withdrawalPinPaid: updated.withdrawalPinPaid } : p)));
    } catch (err) {
      toast.error("Failed to update user");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Button onClick={load} variant="ghost">Refresh</Button>
      </div>

      <div className="overflow-auto border rounded">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Pin Paid</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.id.slice(0, 8)}</td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.withdrawalPinPaid ? "Yes" : "No"}</td>
                <td className="p-2">
                  <Button onClick={() => openEdit(u)} size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <Dialog open={true} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit {selected.name}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-3 mt-4">
              <label className="text-sm">Withdrawal PIN (6 digits)</label>
              <Input value={pin} onChange={(e) => setPin(e.target.value)} placeholder={selected.withdrawalPinPaid ? "Leave blank to keep existing" : "Enter new pin"} />

              <label className="flex items-center gap-2">
                <input type="checkbox" checked={paid} onChange={(e) => setPaid(e.target.checked)} />
                <span>Mark as paid</span>
              </label>

              <div className="flex gap-2 mt-4">
                <Button onClick={save}>Save</Button>
                <DialogClose asChild>
                  <Button variant="ghost" onClick={() => setSelected(null)}>Cancel</Button>
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
