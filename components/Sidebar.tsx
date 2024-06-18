"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

import Image from "next/image";
import SidebarBoardsList from "./SidebarBoardsList";
import ThemeAndSidebarSwitch from "./ThemeAndSidebarSwitch";

const Sidebar = ({
  boards,
  isSidebarVisible,
  setIsSidebarVisible,
  setSelectedBoard,
  selectedBoard,
}: {
  boards: boardType[];
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBoard: React.Dispatch<React.SetStateAction<string>>;
  selectedBoard: string;
}) => {
  const { theme } = useTheme();
  return (
    <aside
      className={cn(
        "hidden tablet:flex w-fit h-screen min-w-[260px] items-start flex-col justify-between bg-foreground pr-3 border-r-2 border-lines",
        isSidebarVisible ? "hidden tablet:flex" : "!hidden"
      )}
    >
      <div className="flex flex-col gap-14">
        <div>
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
            className="mt-8 ml-8 tablet:mr-[81px] desktop:mr-[113px]"
          />
        </div>
        <SidebarBoardsList
          boards={boards}
          setSelectedBoard={setSelectedBoard}
          selectedBoard={selectedBoard}
        />
      </div>

      <ThemeAndSidebarSwitch
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </aside>
  );
};

export default Sidebar;
