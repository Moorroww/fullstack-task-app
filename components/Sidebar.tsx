"use client";

import { usePopupsStore } from "@/stores/store.popups";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import SidebarBoardsList from "./SidebarBoardsList";
import ThemeAndSidebarSwitch from "./ThemeAndSidebarSwitch";
import UserTab from "./UserTab";
import Image from "next/image";

const Sidebar = () => {
  const { isSidebarVisible } = usePopupsStore();
  const { theme } = useTheme();
  return (
    <aside
      className={cn(
        "fixed left-1/2 top-[88px] z-10 flex w-[260px] min-w-[260px] -translate-x-1/2 flex-col items-start justify-between rounded-lg border-lines bg-foreground pr-3 tablet:static tablet:z-0 tablet:h-screen tablet:translate-x-0 tablet:rounded-none tablet:border-r-2 desktop:w-[300px] desktop:min-w-[300px]",
        isSidebarVisible ? "tablet:flex" : "!hidden",
      )}
    >
      <div className="flex max-h-[60vh] flex-col tablet:max-h-[70%]">
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
            className="mb-16 ml-8 mt-8 tablet:mr-[81px] desktop:mr-[113px]"
          />
        </div>

        <SidebarBoardsList />
      </div>

      <div className="mt-4 flex flex-col self-center tablet:gap-4">
        <UserTab />
        <ThemeAndSidebarSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
