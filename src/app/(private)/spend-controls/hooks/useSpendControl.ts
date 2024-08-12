import { useSpendControlService } from "./useSpendControlService";

export function useSpendControl() {
  const service = useSpendControlService();
  return {
    spendControls: service.data?.data || [],
    isLoading: service.isLoading || service.isFetching,
  };
}
