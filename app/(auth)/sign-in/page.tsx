"use client";

import { useState } from "react";
import { redirectSignUp } from "@/actions/actions.redirect";
import { validateSignup, loginUser } from "@/actions/actions.user";

import FormInputField from "@/components/ui/FormInputField";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormValidation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await validateSignup(email, password, "");

    if (res == 1) {
      loginUser(email, password);
    }
  };

  return (
    <div className="flex w-full max-w-[480px] flex-col gap-8 px-6">
      <form
        onSubmit={(e) => handleFormValidation(e)}
        className="flex flex-col gap-3"
      >
        <FormInputField
          fieldName="Email"
          type="text"
          placeholder="e.g. kanban.user.com"
          method={setEmail}
          value={email}
        />
        <FormInputField
          fieldName="Password"
          type="password"
          method={setPassword}
          value={password}
        />

        <Button className="mt-8" type="submit">
          Sign In
        </Button>
      </form>

      <Button
        variant="link"
        className="cursor-pointer self-end text-right text-kbPurpleMain"
        onClick={() => {
          redirectSignUp();
        }}
      >
        sign up
      </Button>
    </div>
  );
};

export default SignInPage;
