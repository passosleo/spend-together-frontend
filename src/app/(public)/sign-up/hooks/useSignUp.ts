import { SignUpSchema } from "@/schemas/sign-up";
import { useSignUpService } from "./useSignUpService";
import { useAuthContext } from "@/context/auth-context";

export function useSignUp() {
  const service = useSignUpService();
  const { onAuthenticated } = useAuthContext();

  function onSubmit(data: SignUpSchema) {
    service.mutate(
      {
        payload: data,
      },
      {
        onSuccess: (res) => {
          const token = res.data!.session.token;
          onAuthenticated(token);
        },
      }
    );
  }

  return { onSubmit, isLoading: service.isPending };
}
