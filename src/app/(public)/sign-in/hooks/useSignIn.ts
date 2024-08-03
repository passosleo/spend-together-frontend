import { SignInSchema } from "@/schemas/sign-in";
import { useSignInService } from "./useSignInService";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAuthContext } from "@/context/AuthContext";

export function useSignIn() {
  const loginService = useSignInService();
  const { onAuthenticated } = useAuthContext();
  const { storeData, deleteStoredData, getStoredData } = useLocalStorage();
  const storedEmail = getStoredData("email");

  function onSubmit(data: SignInSchema) {
    loginService.mutate(
      {
        payload: {
          email: data.email,
          password: data.password,
        },
      },
      {
        onSuccess: (res) => {
          if (data.rememberMe) {
            storeData("email", data.email);
          } else {
            deleteStoredData("email");
          }
          if (res?.data) onAuthenticated(res.data.token);
        },
      }
    );
  }

  return {
    isLoading: loginService.isPending,
    onSubmit,
    storedEmail,
    storedRememberMe: !!storedEmail,
  };
}
