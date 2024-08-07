"use client";
import { CustomList } from "@/components/custom-list";
import { useNotification } from "./hooks/useNotification";
import { CustomLoading } from "@/components/custom-loading";
import { NotificationCard } from "./components/notification-card";

export default function NotificationsPage() {
  const { notifications, isLoading } = useNotification();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={notifications}
          renderItem={(notification) => <NotificationCard {...notification} />}
        />
      </CustomLoading>
    </div>
  );
}
