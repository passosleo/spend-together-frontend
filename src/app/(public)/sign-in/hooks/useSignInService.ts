import { useCustomMutate } from "@/services/hooks/useCustomMutate";
import { SignInRequest, SignInResponse } from "../types";

export function useSignInService() {
  const service = useCustomMutate<SignInRequest, SignInResponse>({
    routeName: "signIn",
    setQueryKeys: ["signIn"],
    invalidateQueryKeys: ["user-info"],
  });
  return service;
}
