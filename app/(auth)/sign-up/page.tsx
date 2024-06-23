"use client";

import { useState } from "react";
import { createNewUser, validateSignup } from "@/actions/actions.signup";
import { redirectSignIn } from "@/actions/actions.redirect";

import FormInputField from "@/components/FormInputField";
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
    <div className="flex flex-col gap-8 w-full max-w-[480px] px-6">
      <form
        onSubmit={(e) => handleFormValidation(e)}
        className="flex flex-col gap-3"
      >
        <FormInputField
          fieldName="Email"
          type="text"
          placeholder="e.g. kanban.user.com"
          method={setEmail}
        />
        <FormInputField
          fieldName="Password"
          type="password"
          method={setPassword}
        />
        <FormInputField
          fieldName="Name"
          method={setName}
          placeholder={email.split("@")[0]}
        />

        <Button className="mt-8" type="submit">
          Sign Up
        </Button>
      </form>

      <Button
        variant="link"
        className="text-right text-kbPurpleMain cursor-pointer self-end"
        onClick={() => {
          redirectSignIn();
        }}
      >
        log in
      </Button>
    </div>
  );
};

export default SignUpPage;
