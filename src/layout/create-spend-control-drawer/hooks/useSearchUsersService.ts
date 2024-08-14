import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { UserSearchResponse } from "../types";

type Params = {
  search?: string;
};

export function useSearchUserService({ search }: Params) {
  const isEnabled = !!search && search.length > 2 && !search.includes(" ");

  const service = useCustomQuery<
    void,
    { username?: string },
    UserSearchResponse[]
  >({
    routeName: "searchUsers",
    enabled: isEnabled,
    queryKey: ["search-users", search],
    query: {
      username: search,
    },
  });

  return service;
}
