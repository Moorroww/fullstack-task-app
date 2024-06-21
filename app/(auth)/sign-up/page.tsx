"use client";

import { useState } from "react";
import { validateSignup } from "@/actions/actions.signup";

import FormInputField from "@/components/FormInputField";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleFormValidation = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await validateSignup(email, password, name);

    if (res === 1) {
      // console.log("Form is valid");
      // const promise = () =>
      //   new Promise((resolve) =>
      //     setTimeout(() => resolve({ name: "Sonner" }), 2000)
      //   );
      // toast.promise(promise, {
      //   loading: "Creating account...",
      //   success: (data) => {
      //     return `${
      //       email.split("@")[0]
      //     }, your accout has been created successfully! Redirecting to loogin in 2 seconds`;
      //   },
      //   error: "Error",
      // });
      // timeout login redirect here
    }
  };

  return (
    <div className="flex flex-col gap-8">
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
    </div>
  );
};

export default SignUpPage;
