import { User } from "@/types/generic";
import { SignInResponse } from "../sign-in/types";

export type SignUpRequest = {
  email: string;
  name?: string;
  username: string;
  password: string;
  avatar?: string | null;
};

export type SignUpResponse = {
  user: User;
  session: SignInResponse;
};
