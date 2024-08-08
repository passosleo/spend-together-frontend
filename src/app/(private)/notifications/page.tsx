"use client";
import { CustomList } from "@/components/custom-list";
import { useNotification } from "./hooks/useNotification";
import { CustomLoading } from "@/components/custom-loading";
import { NotificationItem } from "./components/notification-item";

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
