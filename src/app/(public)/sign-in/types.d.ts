export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  type: string;
  token: string;
};
