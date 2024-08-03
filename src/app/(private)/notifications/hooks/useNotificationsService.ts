import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { Notification } from "../types";

export function useNotificationsService() {
  const service = useCustomQuery<Notification[]>({
    routeName: "listNotifications",
    queryKey: ["notifications"],
  });
  return service;
}
