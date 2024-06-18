import { cn } from "@/lib/utils";
import BoardIcon from "@/public/icons/BoardIcon";

const SidebarBoardsList = ({
  boards = [],
  setSelectedBoard,
  selectedBoard,
}: SidebarBoardsListType) => {
  return (
    <div>
      <p className="pl-8 text-kbMediumGrey mb-5">
        All boards ({boards.length})
      </p>
      <ul className="flex flex-col">
        {boards.map(({ boardName, boardID }) => {
          return (
            <li
              onClick={() => setSelectedBoard(boardName)}
              className={cn(
                "heading-m text-kbMediumGrey flex items-center gap-4 py-4 pl-8 mr-6 cursor-pointer",
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
          <span className=" text-kbPurpleMain">+ Create New Board</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarBoardsList;
