import { config } from "@/config";
import { z } from "zod";

const { validations } = config.messages;

export const signUpSchema = z
  .object({
    avatar: z.string().optional(),
    terms: z.boolean().refine((value) => value, validations.isRequired),
    name: z
      .string()
      .min(3, validations.string.min(3))
      .max(50, validations.string.max(50))
      .optional(),
    username: z
      .string({ required_error: validations.isRequired })
      .min(3, validations.string.min(3))
      .max(50, validations.string.max(50))
      .trim(),
    email: z
      .string({ required_error: validations.isRequired })
      .email()
      .toLowerCase()
      .trim(),
    password: z
      .string({ required_error: validations.isRequired })
      .min(8, validations.string.min(8))
      .max(20, validations.string.max(20))
      .refine((value) => /[A-Z]/.test(value), validations.password.uppercase)
      .refine((value) => /[a-z]/.test(value), validations.password.lowercase)
      .refine((value) => /\d/.test(value), validations.password.number)
      .refine(
        (value) => /[^A-Za-z0-9]/.test(value),
        validations.password.special
      )
      .transform((value) => value.trim()),
    confirmPassword: z
      .string({ required_error: validations.isRequired })
      .min(8, validations.string.min(8))
      .max(20, validations.string.max(20))
      .refine((value) => /[A-Z]/.test(value), validations.password.uppercase)
      .refine((value) => /[a-z]/.test(value), validations.password.lowercase)
      .refine((value) => /\d/.test(value), validations.password.number)
      .refine(
        (value) => /[^A-Za-z0-9]/.test(value),
        validations.password.special
      )
      .transform((value) => value.trim())
      .transform((value) => value.trim()),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: validations.password.equal,
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
