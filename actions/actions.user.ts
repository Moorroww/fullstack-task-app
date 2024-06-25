import { z } from "zod";
import { ID } from "appwrite";
import { account } from "@/lib/appwrite";
import { redirectSignIn, redirectHome } from "@/actions/actions.redirect";
import { toast } from "sonner";

export const SignupSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
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

export const loginUser = async (email: string, password: string) => {
  const promise = new Promise((resolve) => {
    resolve(account.createEmailPasswordSession(email, password));
  });

  toast.promise(promise, {
    loading: "Logging in...",
    success: (data) => {
      setTimeout(() => {
        redirectHome();
      }, 4000);
      return `Logged in successfully! Redirecting to your boards in 3 seconds...`;
    },
    error: (data) => {
      return `${
        data.code === 0
          ? "Failed to connect to the website. Check your internet connection. The service may be offline."
          : data.message
      }`;
    },
  });
};

export const logoutUser = async () => {
  const promise = new Promise((resolve) => {
    resolve(account.deleteSession("current"));
  });

  toast.promise(promise, {
    loading: "Logging out...",
    success: (data) => {
      setTimeout(() => {
        redirectSignIn();
      }, 0);
      return `Logged out successfully!`;
    },
    error: (data) => {
      return `${data.message}`;
    },
  });
};
