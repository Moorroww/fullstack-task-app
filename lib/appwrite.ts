import { Client, Databases, Account } from "appwrite";

const client = new Client()
  .setEndpoint(`${process.env.NEXT_PUBLIC_APP_LOCAL_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`);

export const account = new Account(client);
export const databases = new Databases(client);
