import { redirect } from "next/navigation";

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  type: string;
  token: string;
};
