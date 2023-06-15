import { z } from 'zod';

/**
 * req validation by zod
 * body --> onject data validation
 */
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
