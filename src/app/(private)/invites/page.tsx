"use client";
import { useAuthContext } from "@/context/auth-context";

export default function InvitesPage() {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <h1>Invites</h1>
    </div>
  );
}
