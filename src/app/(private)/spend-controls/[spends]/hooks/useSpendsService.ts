import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { Spend } from "../types";

type SpendsServiceParams = {
  spendControlId?: string;
};

export function useSpendsService({ spendControlId }: SpendsServiceParams) {
  const service = useCustomQuery<SpendsServiceParams, void, Spend[]>({
    routeName: "listSpendsBySpendControlId",
    queryKey: ["spends"],
    params: { spendControlId },
  });
  return service;
}
