import { CustomButton } from "../../components/custom-button";
import {
  CustomDrawer,
  CustomDrawerProps,
} from "../../components/custom-drawer";
import { When } from "../../components/when";
import { ResendCountdown } from "./components/resend-countdown";
import { useVerifyEmail } from "./hooks/useVerifyEmail";
import { UserStore } from "@/stores/user";

type VerifyEmailProps = CustomDrawerProps & {
  user: UserStore;
  onClose: () => void;
};

export function VerifyEmailDrawer({
  user,
  onClose,
  ...props
}: VerifyEmailProps) {
  const { sendVerifyEmail, isSending, isUserEmailVerified, isFirstAccess } =
    useVerifyEmail({
      user,
    });
  return (
    <When condition={!isUserEmailVerified}>
      <CustomDrawer
        {...props}
        title="Valide seu e-mail"
        description={
          isFirstAccess
            ? "Acabamos de enviar um e-mail de confirmação para você validar sua conta."
            : "Ops! Parece que você ainda não validou seu e-mail. Por favor, valide sua conta para continuar."
        }
        content={
          <ResendCountdown
            isEnabled={isFirstAccess}
            isSending={isSending}
            onResend={sendVerifyEmail}
            time={30}
          />
        }
        footer={<CustomButton onClick={onClose}>Já validei</CustomButton>}
      />
    </When>
  );
}
