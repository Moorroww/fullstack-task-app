"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useSidebar } from "@/context/sidebarContext";

import Image from "next/image";
import SidebarBoardsList from "./SidebarBoardsList";
import ThemeAndSidebarSwitch from "./ThemeAndSidebarSwitch";
import UserTab from "./UserTab";

const Sidebar = () => {
  const { isSidebarVisible } = useSidebar();
  const { theme } = useTheme();
  return (
    <aside
      className={cn(
        "absolute tablet:static left-1/2 -translate-x-1/2 tablet:translate-x-0 top-[88px] rounded-lg tablet:rounded-none flex w-fit tablet:h-screen min-w-[260px] items-start flex-col justify-between bg-foreground pr-3 tablet:border-r-2 border-lines z-10 tablet:z-0",
        isSidebarVisible ? "tablet:flex" : "!hidden"
      )}
    >
      <div className="flex flex-col max-h-[60vh] tablet:max-h-[70%]">
        <div className="hidden tablet:flex">
          <Image
            priority
            src={
              theme === "dark"
                ? "/logos/logo-light.svg"
                : "/logos/logo-dark.svg"
            }
            width="153"
            height="26"
            alt="kanban logo"
            className="mt-8 ml-8 tablet:mr-[81px] desktop:mr-[113px] mb-16"
          />
        </div>

        <SidebarBoardsList />
      </div>

      <div className="flex flex-col tablet:gap-4 self-center mt-4">
        <UserTab />
        <ThemeAndSidebarSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
