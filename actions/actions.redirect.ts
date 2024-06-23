"use server";
import { redirect } from "next/navigation";

export const redirectSignIn = () => {
  redirect("/sign-in");
};
