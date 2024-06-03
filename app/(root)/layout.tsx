import Sidebar from "@/components/Sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
};

export default HomeLayout;
