"use client";

import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Topbar = ({
  currentBoard,
  selectedBoard,
}: {
  currentBoard: string;
  selectedBoard: string;
}) => {
  const { theme } = useTheme();

  return (
    <header className="w-full bg-foreground flex">
      <div className="p-6 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            className="tablet:hidden"
            src="/logos/logo-mobile.svg"
            width={24}
            height={25}
            alt="kanban logo"
          />
          <p className="heading-xl">{currentBoard}</p>
        </div>
        <div className="flex items-center gap-6">
          <Button disabled={selectedBoard == ""}>
            + <span className="hidden tablet:flex">Add New Column</span>
          </Button>

          <Image
            className="cursor-pointer"
            src="/icons/icon-vertical-ellipsis.svg"
            width={5}
            height={20}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
