import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Provide an valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const sighUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export { loginSchema, sighUpSchema };
