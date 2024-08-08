import { useEffect, useState } from "react";
import { DrawerDescription } from "../../../ui/drawer";
import { When } from "../../../when";
import { CustomLoader } from "../../../custom-loader";

type Props = {
  isSending: boolean;
  onResend: (callback: () => void) => void;
  onFinishCountdown?: () => void;
  isEnabled?: boolean;
  time: number;
};

export function ResendCountdown({
  time,
  isEnabled = false,
  onResend,
  isSending,
  onFinishCountdown,
}: Props) {
  const [showCountdown, setShowCountdown] = useState(isEnabled ?? false);
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showCountdown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (countdown === 0) {
      if (onFinishCountdown) onFinishCountdown();
      setShowCountdown(false);
    }

    return () => clearTimeout(timer);
  }, [countdown, onFinishCountdown, showCountdown]);

  return (
    <>
      <DrawerDescription className="my-2">
        Não recebeu o e-mail?
      </DrawerDescription>
      <When
        condition={!showCountdown}
        elseRender={
          <DrawerDescription className="mb-2">
            Tentar novamente em {countdown} segundos
          </DrawerDescription>
        }
      >
        <When condition={!isSending} elseRender={<CustomLoader />}>
          <DrawerDescription
            className="mb-2 text-primary font-medium underline cursor-pointer"
            onClick={() =>
              onResend(() => {
                setCountdown(time);
                setShowCountdown(true);
              })
            }
          >
            Reenviar
          </DrawerDescription>
        </When>
      </When>
    </>
  );
}
