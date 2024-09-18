"use client";

import { usePopupsStore } from "@/stores/store.popups";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import Image from "next/image";
import SidebarBoardsList from "./SidebarBoardsList";
import ThemeAndSidebarSwitch from "./ThemeAndSidebarSwitch";
import UserTab from "./UserTab";
import CreateBoardSidebarButton from "./CreateBoardSidebarButton";
import SidebarBoardsCounter from "./SidebarBoardsCounter";

const Sidebar = () => {
  const { isSidebarVisible } = usePopupsStore();
  const { theme } = useTheme();

  return (
    <aside
      className={cn(
        "fixed left-1/2 top-1/2 z-10 flex max-h-[50vh] min-w-[264px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-y-hidden rounded-[8px] bg-foreground tablet:static tablet:h-screen tablet:max-h-screen tablet:min-w-[261px] tablet:translate-x-0 tablet:translate-y-0 tablet:rounded-none desktop:min-w-[300px]",
        isSidebarVisible ? "tablet:flex" : "!hidden",
      )}
    >
      <Image
        priority
        src={
          theme === "dark" ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"
        }
        width="153"
        height="26"
        alt="kanban logo"
        className="mb-16 ml-8 mt-8 hidden tablet:mr-[81px] tablet:block desktop:mr-[113px]"
      />

      <SidebarBoardsCounter />
      <SidebarBoardsList />
      <CreateBoardSidebarButton />

      <div className="mx-8 mt-4 flex flex-col tablet:gap-4">
        <UserTab />
        <ThemeAndSidebarSwitch />
      </div>
    </aside>
  );
};

export default Sidebar;
