"use client";
import { CustomList } from "@/components/CustomList";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { NotificationItem } from "@/components/NotificationItem";
import { useNotifications } from "./hooks/useNotifications";
import { CustomLoading } from "@/components/CustomLoading";

export default function NotificationsPage() {
  const { user, logout } = useAuthContext();
  const { notifications, isLoading } = useNotifications();
  const router = useRouter();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={[
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
            ...notifications,
          ]}
          renderItem={(notification) => <NotificationItem {...notification} />}
        />
      </CustomLoading>
    </div>
  );
}
