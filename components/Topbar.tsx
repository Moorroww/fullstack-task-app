"use client";

import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Topbar = ({ currentBoard }: { currentBoard: string }) => {
  const { theme } = useTheme();

  return (
    <div className="w-screen h-[81px] bg-foreground flex ">
      <div className="min-w-[260px] border-r-2 border-lines">
        <Image
          priority
          src={
            theme === "dark" ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"
          }
          width="153"
          height="26"
          alt="kanban logo"
          className="mt-8 ml-[34px] tablet:mr-[81px] desktop:mr-[113px]"
        />
      </div>

      <div className="p-6 flex items-center justify-between w-full">
        <p className="heading-xl">{currentBoard}</p>
        <div className="flex items-center gap-6">
          <Button>+ Add New Column</Button>

          <Image
            className="cursor-pointer"
            src="/icons/icon-vertical-ellipsis.svg"
            width={5}
            height={20}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
