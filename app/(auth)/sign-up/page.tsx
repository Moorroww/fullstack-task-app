"use client";

import { useState } from "react";
import { createNewUser, validateSignup } from "@/actions/actions.user";
import { redirectSignIn } from "@/actions/actions.redirect";

import FormInputField from "@/components/ui/FormInputField";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleFormValidation = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await validateSignup(email, password, name);

    if (res === 1) {
      createNewUser(email, password, name);
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
        <FormInputField
          fieldName="Name"
          method={setName}
          placeholder={email.split("@")[0]}
          value={name}
        />

        <Button className="mt-8" type="submit">
          Sign Up
        </Button>
      </form>

      <Button
        variant="link"
        className="cursor-pointer self-end text-right text-kbPurpleMain"
        onClick={() => {
          redirectSignIn();
        }}
      >
        sign in
      </Button>
    </div>
  );
};

export default SignUpPage;
