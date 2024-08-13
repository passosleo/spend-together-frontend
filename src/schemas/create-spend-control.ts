import { z } from "zod";
import { config } from "../config";

const { validations } = config.messages;

export const createSpendControlSchema = z
  .object({
    name: z
      .string({ required_error: validations.isRequired })
      .min(3, { message: validations.string.min(3) })
      .transform((value) => value.trim()),
    description: z
      .string()
      .transform((value) => value.trim())
      .optional(),
    color: z.string({ required_error: validations.isRequired }),
    shared: z.boolean().optional(),
    search: z.string().optional(),
    invitedUsers: z.array(
      z.object({
        username: z.string(),
        name: z.string().nullable(),
        avatar: z.string().nullable(),
      })
    ),
  })
  .superRefine(({ shared, invitedUsers }, ctx) => {
    if (shared && !invitedUsers?.length) {
      ctx.addIssue({
        code: "custom",
        message: validations.general.atLeastOneUserRequired,
        path: ["search"],
      });
    }
  });

export type CreateSpendControlSchema = z.infer<typeof createSpendControlSchema>;
