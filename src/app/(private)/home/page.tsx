"use client";
import { CustomButton } from "@/components/custom-button";
import { useAuthContext } from "@/context/auth-context";

export default function DashboardPage() {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <h1>Logged in as {user?.name}</h1>
      <h2>Email: {user?.email}</h2>
      <CustomButton onClick={logout}>Logout</CustomButton>
    </div>
  );
}
