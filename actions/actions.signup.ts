import { toast } from "sonner";
import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  name: z.string().optional(),
});

// export type SignupInput = z.infer<typeof SignupSchema>;

export const validateSignup = (
  email: string,
  password: string,
  name: string
) => {
  try {
    SignupSchema.parse({ email, password, name });
    return 1;
  } catch (error: any) {
    return error.errors.map((err: any) => toast.error(err.message));
  }
};
