"use client";
import { CustomList } from "@/components/CustomList";
import { NotificationItem } from "@/components/NotificationItem";
import { useNotification } from "./hooks/useNotification";
import { CustomLoading } from "@/components/CustomLoading";

export default function NotificationsPage() {
  const { notifications, isLoading } = useNotification();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={notifications}
          renderItem={(notification) => <NotificationItem {...notification} />}
        />
      </CustomLoading>
    </div>
  );
}
