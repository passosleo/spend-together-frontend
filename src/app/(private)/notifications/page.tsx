"use client";
import { CustomList } from "@/components/CustomList";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Notification } from "./types";
import { NotificationItem } from "@/components/NotificationItem";
import { useNotifications } from "./hooks/useNotifications";
import { CustomLoading } from "@/components/CustomLoading";

export default function NotificationsPage() {
  const { user, logout } = useAuthContext();
  const router = useRouter();
  const { notifications, isLoading } = useNotifications();
  return (
    <div>
      <CustomLoading isLoading={isLoading} className="h-screen">
        <CustomList
          data={[...notifications, ...notifications, ...notifications]}
          renderItem={(notification) => <NotificationItem {...notification} />}
        />
      </CustomLoading>
    </div>
  );
}
