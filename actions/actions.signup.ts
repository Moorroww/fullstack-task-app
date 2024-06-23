import { z } from "zod";
import { Client, Account, ID } from "appwrite";
import { redirectSignIn } from "@/actions/actions.redirect";
import { toast } from "sonner";

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

export const createNewUser = async (
  email: string,
  password: string,
  name: string
) => {
  const client = new Client()
    .setEndpoint(`${process.env.NEXT_PUBLIC_APP_LOCAL_ENDPOINT}`)
    .setProject(`${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`);

  const account = new Account(client);

  if (name === "") name = email.split("@")[0];

  const promise = new Promise((resolve) => {
    resolve(account.create(ID.unique(), email, password, name));
  });

  toast.promise(promise, {
    loading: "Creating account...",
    success: (data) => {
      setTimeout(() => {
        redirectSignIn();
      }, 4000);
      return `${
        name == "" ? email.split("@")[0] : name
      }, your account has been created successfully! Redirecting to log-in page in 3 seconds...`;
    },
    error: (data) => {
      return `${data.message}`;
    },
  });
};
