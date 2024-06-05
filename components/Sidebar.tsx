"use client";

import { cn } from "@/lib/utils";

import SidebarBoardsList from "./SidebarBoardsList";
import ThemeAndSidebarSwitch from "./ThemeAndSidebarSwitch";

const Sidebar = ({
  boards,
  isSidebarVisible,
  setIsSidebarVisible,
}: {
  boards: boardType[];
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={cn(
        "hidden tablet:flex items-start flex-col justify-between w-fit min-w-[260px] bg-foreground px-3 border-r-2 border-lines",
        isSidebarVisible ? "flex" : "!hidden"
      )}
    >
      <SidebarBoardsList boards={boards} />

      <ThemeAndSidebarSwitch
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </div>
  );
};

export default Sidebar;
