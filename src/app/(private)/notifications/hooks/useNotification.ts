import { useNotificationService } from "./useNotificationService";

export function useNotification() {
  const service = useNotificationService();

  return {
    notifications: service.data?.data ?? [],
    isLoading: service.isLoading || service.isFetching,
  };
}
