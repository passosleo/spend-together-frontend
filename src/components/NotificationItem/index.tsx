import { Notification } from "@/app/(private)/notifications/types";
import { formatDate } from "@/utils/date";
import { When } from "../When";
import Link from "next/link";

function NotificationContent(notification: Notification) {
  return (
    <div className="flex flex-col bg-background px-4 pt-1 pb-2 text-slate-700 text-sm border-b active:bg-primary-foreground transition-all">
      <div className="flex items-center justify-between">
        <When condition={!notification.isRead}>
          <span className="text-2xs px-0.5 leading-normal bg-red-500 text-white rounded-sm">
            New
          </span>
        </When>
        <span className="text-slate-300 text-xs ml-auto">
          {formatDate(notification.createdAt, {
            month: "short",
            day: "2-digit",
          })}
        </span>
      </div>
      <p>{notification.content}</p>
    </div>
  );
}

export function NotificationItem(notification: Notification) {
  return notification.link ? (
    <Link href={notification.link} passHref>
      <NotificationContent {...notification} />
    </Link>
  ) : (
    <NotificationContent {...notification} />
  );
}
