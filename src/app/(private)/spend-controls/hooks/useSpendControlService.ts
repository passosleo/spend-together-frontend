import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { SpendControl } from "../types";
import { usePathname } from "next/navigation";

export function useSpendControlService() {
  const pathname = usePathname();
  const service = useCustomQuery<void, void, SpendControl[]>({
    routeName: "listSpendControls",
    queryKey: ["spend-controls"],
    enabled: pathname.includes("spend-controls"),
  });
  return service;
}
