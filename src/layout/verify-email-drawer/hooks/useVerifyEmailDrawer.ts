import { create } from "zustand";

type StateProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  handle: (open: boolean) => void;
};

export const useVerifyEmailDrawer = create<StateProps>((set) => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  handle: (open) => set({ isOpen: open }),
}));
