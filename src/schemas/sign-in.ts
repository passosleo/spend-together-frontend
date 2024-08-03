import { config } from "../config";
import { z } from "zod";

const { isRequired, email } = config.messages.validations;

export const signInSchema = z.object({
  email: z
    .string({ required_error: isRequired })
    .email(email.isNotValid)
    .toLowerCase(),
  password: z.string({ required_error: isRequired }).min(1, isRequired),
  rememberMe: z.boolean().optional(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
