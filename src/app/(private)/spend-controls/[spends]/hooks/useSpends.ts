import { usePathname } from "next/navigation";
import { useSpendsService } from "./useSpendsService";

export function useSpends() {
  const spendControlId = usePathname().split("/").pop();
  const service = useSpendsService({ spendControlId });

  return {
    spends: service.data?.data || [],
    isLoading: service.isLoading,
  };
}
