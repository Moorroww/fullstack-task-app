import { useSidebar } from "@/context/sidebarContext";
import useBoards from "@/hooks/useBoards";
import { cn } from "@/lib/utils";

import BoardIcon from "@/public/icons/BoardIcon";

const SidebarBoardsList = () => {
  const {
    selectedBoard,
    setSelectedBoard,
    setIsSidebarVisible,
    setIsCreateBoardPopupVisible,
  } = useSidebar();

  const { boards, isLoading, isError } = useBoards();

  return (
    <div className="mt-4 h-[70%] tablet:mt-0">
      <p className="mb-5 pl-8 text-kbMediumGrey">
        All boards ({boards.length})
      </p>
      {isLoading ? (
        <p className="animate-pulse pl-8 text-kbPurpleSecondary">Loading...</p>
      ) : (
        <ul className="flex h-full max-h-[50vh] flex-col overflow-y-auto tablet:max-h-[100%]">
          {isError ? (
            <p className="pl-8 text-kbRed">
              Error occured while loading boards. Please check your internet
              connection or try again later. If the problem persists, contact
              support.
            </p>
          ) : (
            <>
              {boards.map(({ boardName, boardID }) => {
                return (
                  <li
                    onClick={() =>
                      setSelectedBoard({
                        boardName: boardName,
                        boardID: boardID,
                      })
                    }
                    className={cn(
                      "mr-6 flex cursor-pointer items-center gap-4 py-4 pl-8 pr-6 text-kbMediumGrey tablet:pr-0",
                      boardName == selectedBoard.boardName &&
                        "rounded-r-full bg-kbPurpleMain text-white",
                    )}
                    key={boardID}
                  >
                    <BoardIcon
                      fill={
                        boardName == selectedBoard.boardName
                          ? "#FFFFFF"
                          : "#828FA3"
                      }
                    />
                    <span className="heading-m max-w-[15ch] overflow-hidden text-inherit">
                      {boardName.length < 15
                        ? boardName
                        : boardName.slice(0, 15) + "..."}
                    </span>
                  </li>
                );
              })}
              <li className="heading-m mr-6 flex cursor-pointer items-center gap-4 py-4 pl-8 text-kbPurpleMain">
                <BoardIcon fill="#635fc7" />
                <span
                  className="text-kbPurpleMain"
                  onClick={() => {
                    setIsCreateBoardPopupVisible(true);
                    window.innerWidth < 768 && setIsSidebarVisible(false);
                  }}
                >
                  + Create New Board
                </span>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default SidebarBoardsList;
