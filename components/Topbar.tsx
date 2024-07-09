import { useState } from "react";
import { useSidebar } from "@/context/sidebarContext";
import { cn } from "@/lib/utils";

import FullSiteCover from "./FullSiteCover";
import DeleteBoardPopup from "./DeleteBoardPopup";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const { selectedBoard, isSidebarVisible, setIsSidebarVisible } = useSidebar();

  const [boardOptionsVisible, setBoardOptionsVisible] =
    useState<boolean>(false);

  return (
    <header className="w-full bg-foreground flex">
      <div className="p-4 tablet:p-6 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            className="tablet:hidden"
            src="/logos/logo-mobile.svg"
            width={24}
            height={25}
            alt="kanban logo"
          />
          <p className="heading-xl">{selectedBoard}</p>

          <Image
            className={cn(
              "tablet:hidden cursor-pointer transition-transform",
              isSidebarVisible && "rotate-180"
            )}
            src="/icons/icon-chevron-down.svg"
            width={15}
            height={15}
            alt=""
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          />
        </div>
        <div className="flex items-center gap-6">
          <Button
            disabled={selectedBoard == ""}
            className="flex gap-1 items-center"
          >
            <Image
              src="/icons/icon-add-task-mobile.svg"
              width={10}
              height={10}
              alt=""
            />
            <span className="hidden tablet:flex text-white">
              Add New Column
            </span>
          </Button>

          <Image
            className="cursor-pointer"
            src="/icons/icon-vertical-ellipsis.svg"
            width={5}
            height={20}
            alt=""
            onClick={() => setBoardOptionsVisible(!boardOptionsVisible)}
          />
        </div>
      </div>

      {boardOptionsVisible && (
        <>
          <FullSiteCover
            boardOptionsVisible={boardOptionsVisible}
            setBoardOptionsVisible={setBoardOptionsVisible}
          />
          <DeleteBoardPopup
            boardOptionsVisible={boardOptionsVisible}
            setBoardOptionsVisible={setBoardOptionsVisible}
            selectedBoard={selectedBoard}
          />
        </>
      )}
    </header>
  );
};

export default Topbar;
