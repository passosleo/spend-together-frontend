import { Notification } from "@/app/(private)/notifications/types";
import { formatDate } from "@/utils/date";

export function NotificationItem(notification: Notification) {
  return (
    <div className="flex flex-col bg-background px-4 pt-1 pb-2 text-slate-700 text-sm border-b">
      <span className="text-slate-300 text-xs self-end">
        {formatDate(notification.createdAt, {
          month: "short",
          day: "2-digit",
        })}
      </span>
      <p>{notification.content}</p>
    </div>
  );
}
