"use server";
import { redirect } from "next/navigation";

export const redirectSignIn = () => {
  redirect("/sign-in");
};

export const redirectSignUp = () => {
  redirect("/sign-up");
};

export const redirectHome = () => {
  redirect("/");
};
