import React from "react";
import AuthHeader from "@/components/AuthHeader";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
