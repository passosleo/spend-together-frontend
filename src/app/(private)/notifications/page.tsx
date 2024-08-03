"use client";
import { CustomButton } from "@/components/CustomButton";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NotificationsPage() {
  const { user, logout } = useAuthContext();
  const router = useRouter();
  return (
    <div>
      <h1>Notifications</h1>
      <CustomButton onClick={() => router.back()}>Go back</CustomButton>
      <CustomButton onClick={logout}>Logout</CustomButton>
    </div>
  );
}
