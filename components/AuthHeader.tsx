"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const pathname = usePathname();
  return (
    <header className="flex - flex-col text-center gap-2 mb-32 ">
      <h1 className="flex text-[25px] gap-1">
        <span className="pr-2 text-[25px]">Welcome to</span>
        <Image
          src="/logos/logo-mobile.svg"
          width={24}
          height={25}
          alt="kanban logo"
        />
        Kanban
      </h1>
      <p className="text-[15px]">
        {pathname.includes("sign-up") ? "Sign up" : "Sign in"} to continue
      </p>
    </header>
  );
};

export default AuthHeader;
