import React from "react";
import AuthHeader from "@/components/AuthHeader";
import { Toaster } from "@/components/ui/sonner";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <AuthHeader />
      {children}

      <Toaster
        position="bottom-center"
        closeButton
        toastOptions={{
          unstyled: false,
          classNames: {
            error: "group-[.toaster]:bg-red-400",
          },
        }}
      />
    </div>
  );
};

export default AuthLayout;
