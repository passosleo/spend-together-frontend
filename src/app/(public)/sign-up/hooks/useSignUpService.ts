import { useCustomMutate } from "@/services/hooks/useCustomMutate";
import { SignUpRequest, SignUpResponse } from "../types";

export function useSignUpService() {
  const service = useCustomMutate<SignUpRequest, SignUpResponse>({
    routeName: "signUp",
    setQueryKeys: ["signUp"],
  });
  return service;
}
