import { useNotificationService } from "./useNotificationService";

export function useNotification() {
  const service = useNotificationService();

  return {
    isLoading: service.isLoading,
    notifications: service.data?.data ?? [],
  };
}
