import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { SpendControl } from "../types";

export function useSpendControlService() {
  const service = useCustomQuery<SpendControl[]>({
    routeName: "listSpendControls",
    queryKey: ["spend-controls"],
  });
  return service;
}
