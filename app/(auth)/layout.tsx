import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid place-items-center h-[100vh]">{children}</div>;
};

export default AuthLayout;
