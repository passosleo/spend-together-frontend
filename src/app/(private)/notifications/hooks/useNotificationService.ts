import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { Notification } from "../types";
import { usePathname } from "next/navigation";

export function useNotificationService() {
  const pathname = usePathname();
  const service = useCustomQuery<void, void, Notification[]>({
    routeName: "listNotifications",
    queryKey: ["notifications"],
    enabled: pathname.includes("notifications"),
  });
  return service;
}
