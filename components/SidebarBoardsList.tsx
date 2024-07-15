import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebarContext";

import BoardIcon from "@/public/icons/BoardIcon";
import useBoards from "@/hooks/useBoards";

const SidebarBoardsList = () => {
  const {
    selectedBoard,
    setSelectedBoard,
    setIsSidebarVisible,
    setIsCreateBoardPopupVisible,
  } = useSidebar();

  const { boards } = useBoards();

  return (
    <div className="mt-4 tablet:mt-0 h-[70%]">
      <p className="pl-8 text-kbMediumGrey mb-5">
        All boards ({boards.length})
      </p>
      <ul className="flex flex-col h-full overflow-y-auto max-h-[50vh] tablet:max-h-[100%]">
        {boards.map(({ boardName, boardID }) => {
          return (
            <li
              onClick={() => setSelectedBoard(boardName)}
              className={cn(
                "heading-m text-kbMediumGrey flex items-center gap-4 py-4 pl-8 pr-6 tablet:pr-0 mr-6 cursor-pointer",
                boardName == selectedBoard &&
                  "bg-kbPurpleMain rounded-r-full text-white"
              )}
              key={boardID}
            >
              <BoardIcon
                fill={boardName == selectedBoard ? "#FFFFFF" : "#828FA3"}
              />
              {boardName}
            </li>
          );
        })}
        <li className="heading-m text-kbPurpleMain flex items-center gap-4 py-4 pl-8 mr-6 cursor-pointer">
          <BoardIcon fill="#635fc7" />
          <span
            className=" text-kbPurpleMain"
            onClick={() => {
              setIsCreateBoardPopupVisible(true);
              window.innerWidth < 768 && setIsSidebarVisible(false);
            }}
          >
            + Create New Board
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarBoardsList;
