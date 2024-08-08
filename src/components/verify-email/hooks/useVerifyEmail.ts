import { useVerifyEmailService } from "./useVerifyEmailService";
import { UserStore } from "@/stores/user";

export function useVerifyEmail({ user }: { user: UserStore }) {
  const isUserEmailVerified = !!user?.emailVerified;
  const isFirstAccess = !!user?.isFirstAccess;
  const service = useVerifyEmailService();

  function sendVerifyEmail(callback?: () => void) {
    service.mutate(
      {
        payload: { email: user?.email },
      },
      {
        onSuccess: () => {
          if (callback) callback();
        },
      }
    );
  }

  return {
    isUserEmailVerified,
    sendVerifyEmail,
    isFirstAccess,
    isSending: service.isPending,
  };
}
