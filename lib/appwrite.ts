import { Client, Databases, Account } from "appwrite";
import { Users, Client as NodeClient } from "node-appwrite";

const client = new Client()
  .setEndpoint(`${process.env.NEXT_PUBLIC_APP_LOCAL_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`);

const n_client = new NodeClient()
  .setEndpoint(`${process.env.NEXT_PUBLIC_APP_LOCAL_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`)
  .setKey(`${process.env.NEXT_PUBLIC_APP_AUTH_KEY}`);

export const account = new Account(client);
export const databases = new Databases(client);
export const users = new Users(n_client);
