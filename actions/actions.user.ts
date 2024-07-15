import { z } from "zod";
import { ID } from "appwrite";
import { account, databases, users } from "@/lib/appwrite";
import { redirectSignIn, redirectHome } from "@/actions/actions.redirect";
import { toast } from "sonner";

const DATABASE_ID = `${process.env.NEXT_PUBLIC_APP_DB_ID}`;
const USERS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_USERS_ID}`;
const BOARDS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_BOARDS_ID}`;

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
  const DATABASE_ID = `${process.env.NEXT_PUBLIC_APP_DB_ID}`;
  const USERS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_USERS_ID}`;

  const newID = ID.unique();

  const promise = new Promise((resolve, reject) => {
    Promise.all([
      account.create(newID, email, password, name),
      databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, newID, {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
      }),
    ])
      .then((results) => resolve(results))
      .catch((error) => reject(error));
  });

  toast.promise(promise, {
    loading: "Creating account...",
    success: (data) => {
      redirectSignIn();
      return `${
        name == "" ? email.split("@")[0] : name
      }, your account has been created successfully! Please sign-in.`;
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
      redirectHome();
      return `Logged in successfully!`;
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

export const deleteAccount = async () => {
  const user = await account.get();

  const userBoards = await databases.listDocuments(
    DATABASE_ID,
    BOARDS_COLLECTION_ID
  );

  try {
    userBoards.documents.map(
      async (doc) =>
        await databases.deleteDocument(
          DATABASE_ID,
          BOARDS_COLLECTION_ID,
          `${doc.$id}`
        )
    );

    await databases.deleteDocument(
      DATABASE_ID,
      USERS_COLLECTION_ID,
      `${user.$id}`
    );

    await users.delete(user.$id);

    toast.success("Account deleted successfully. This action is irreversible.");
    redirectSignIn();
  } catch (error) {
    console.error(error);
  }
};
