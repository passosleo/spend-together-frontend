import { useNotificationsService } from "./useNotificationsService";

export function useNotifications() {
  const service = useNotificationsService();

  return {
    isLoading: service.isLoading,
    notifications: service.data?.data ?? [],
  };
}
