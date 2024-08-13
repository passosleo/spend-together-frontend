import { useCustomMutate } from "@/services/hooks/useCustomMutate";
import { VerifyEmailRequest } from "../types";

export function useVerifyEmailService() {
  const service = useCustomMutate<VerifyEmailRequest, void>({
    routeName: "sendVerifyEmail",
    setQueryKeys: ["verifyEmail"],
  });
  return service;
}
