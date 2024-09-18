import useBoards from "@/hooks/useBoards";
import { useBoardsStore } from "@/stores/store.boards";
import { cn } from "@/lib/utils";

import BoardIcon from "@/public/icons/BoardIcon";
import { Button } from "./ui/button";

const SidebarBoardsList = () => {
  const { selectedBoard, setSelectedBoard } = useBoardsStore();

  const { boards, refetch } = useBoards();
  const isError = false;
  const isLoading = false;

  if (isError)
    return (
      <p className="h-full px-8 text-kbRed">
        Error occured while loading boards. Please check your internet
        connection or try again later. If the problem persists, contact support.
        <Button
          variant="destructive"
          className="mt-2 w-full"
          onClick={() => refetch}
        >
          Refetch
        </Button>
      </p>
    );

  if (isLoading)
    return (
      <div className="flex h-full flex-col gap-2 px-8">
        <div className="h-6 w-full animate-pulse rounded-[6px] bg-kbMediumGrey"></div>
        <div className="h-6 w-full animate-pulse rounded-[6px] bg-kbMediumGrey"></div>
        <div className="h-6 w-full animate-pulse rounded-[6px] bg-kbMediumGrey"></div>
        <div className="h-6 w-full animate-pulse rounded-[6px] bg-kbMediumGrey"></div>
      </div>
    );

  return (
    <div className="h-full overflow-scroll">
      <ul className="">
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
                boardID == selectedBoard.boardID &&
                  "rounded-r-full bg-kbPurpleMain text-white",
              )}
              key={boardID}
            >
              <BoardIcon
                fill={boardID == selectedBoard.boardID ? "#FFFFFF" : "#828FA3"}
              />
              <span className="heading-m max-w-[15ch] overflow-hidden text-inherit">
                {boardName.length < 15
                  ? boardName
                  : boardName.slice(0, 15) + "..."}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarBoardsList;
