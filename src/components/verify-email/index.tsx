import { CustomButton } from "../custom-button";
import { CustomDrawer } from "../custom-drawer";
import { When } from "../when";
import { useVerifyEmail } from "./hooks/useVerifyEmail";
import { ResendCountdown } from "./components/resend-countdown";
import { UserStore } from "@/stores/user";

type VerifyEmailProps = {
  user: UserStore;
  isOpen: boolean;
  onClose: () => void;
};

export function VerifyEmail({ user, isOpen, onClose }: VerifyEmailProps) {
  const { sendVerifyEmail, isSending, isUserEmailVerified, isFirstAccess } =
    useVerifyEmail({
      user,
    });
  return (
    <When condition={!isUserEmailVerified}>
      <CustomDrawer
        title="Valide seu e-mail"
        description={
          isFirstAccess
            ? "Acabamos de enviar um e-mail de confirmação para você validar sua conta."
            : "Ops! Parece que você ainda não validou seu e-mail. Por favor, valide sua conta para continuar."
        }
        open={isOpen}
        dismissible={false}
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
