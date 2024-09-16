import { useState } from "react";
import { usePopupsStore } from "@/stores/store.popups";
import { useBoardsStore } from "@/stores/store.boards";
import { cn } from "@/lib/utils";

import FullSiteCover from "./FullSiteCover";
import DeleteBoardPopup from "./DeleteBoardPopup";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const { selectedBoard } = useBoardsStore();
  const { isSidebarVisible, setIsSidebarVisible, setPopup } = usePopupsStore();

  const [boardOptionsVisible, setBoardOptionsVisible] =
    useState<boolean>(false);

  return (
    <header className="flex w-full bg-foreground">
      <div className="flex w-full items-center justify-between p-4 tablet:p-6">
        <div className="flex items-center gap-4">
          <Image
            className="tablet:hidden"
            src="/logos/logo-mobile.svg"
            width={24}
            height={25}
            alt="kanban logo"
          />
          <p className="heading-xl">
            {selectedBoard.boardName.length < 15
              ? selectedBoard.boardName
              : selectedBoard.boardName.slice(0, 15) + "..."}
          </p>

          <Image
            className={cn(
              "cursor-pointer transition-transform tablet:hidden",
              isSidebarVisible && "rotate-180",
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
            disabled={selectedBoard.boardID == ""}
            className="flex items-center gap-1"
            onClick={() => setPopup("addColumn")}
          >
            <Image
              src="/icons/icon-add-task-mobile.svg"
              width={10}
              height={10}
              alt=""
            />
            <span className="hidden text-white tablet:flex">
              Add New Column
            </span>
          </Button>

          <Image
            className="cursor-pointer"
            src="/icons/icon-vertical-ellipsis.svg"
            width={5}
            height={20}
            alt=""
            onClick={() => {
              selectedBoard.boardID == ""
                ? null
                : setBoardOptionsVisible(!boardOptionsVisible);
            }}
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
          />
        </>
      )}
    </header>
  );
};

export default Topbar;
