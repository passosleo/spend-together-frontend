import { Notification } from "@/app/(private)/notifications/types";
import { CustomListItem } from "@/components/custom-list-item";
import { When } from "@/components/when";
import { formatDate } from "@/utils/date";
import Link from "next/link";

function NotificationContent(notification: Notification) {
  return (
    <CustomListItem className="pt-1 pb-2">
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
    </CustomListItem>
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
