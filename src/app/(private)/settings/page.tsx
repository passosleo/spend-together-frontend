"use client";
import { CustomButton } from "@/components/CustomButton";
import { useAuthContext } from "@/context/AuthContext";

export default function SettingsPage() {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <h1>Settings</h1>
      <CustomButton onClick={logout}>Logout</CustomButton>
    </div>
  );
}
