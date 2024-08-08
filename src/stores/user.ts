import { User } from "@/types/generic";
import { create } from "zustand";

export type UserStore = User & { isFirstAccess: boolean };

type StateProps = {
  user: UserStore | null;
  setUser: (user: UserStore | null) => void;
};

export const useUserStore = create<StateProps>((set, get) => ({
  user: null,
  setUser: (user) =>
    set((state) => ({
      ...state,
      user,
    })),
}));
