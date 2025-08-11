import { z } from "zod";

const serverEnvSchema = z.object({
  SESSION_SECRET: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export const serverEnv = serverEnvSchema.parse(process.env);
