"use client";
import React from "react";
import AuthHeader from "@/components/AuthHeader";
import useAuth from "@/hooks/useAuth";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
