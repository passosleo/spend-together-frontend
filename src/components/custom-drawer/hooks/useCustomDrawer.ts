import { useState } from "react";

type Props = {
  defaultOpen?: boolean;
};

export function useCustomDrawer({ defaultOpen = false }: Props = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  function handle(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  return { isOpen, open, close, toggle, handle };
}
