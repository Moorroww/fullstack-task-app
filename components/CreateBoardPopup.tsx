import { useState } from "react";
import { useSidebar } from "@/context/sidebarContext";
import useBoards from "@/hooks/useBoards";
import {
  handleColumnNameChange,
  deleteColumnField,
  addNewColumn,
  createNewBoard,
} from "@/actions/actions.boardsAndCols";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreateBoardPopup = () => {
  const { isCreateBoardPopupVisible, setIsCreateBoardPopupVisible } =
    useSidebar();
  const { refetch } = useBoards();
  const [columns, setColumns] = useState<Column[]>([]);
  const [boardName, setBoardName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBoardCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createNewBoard(boardName, columns);
      refetch();
      setIsCreateBoardPopupVisible(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-30 grid h-screen w-screen place-items-center bg-black/50",
        isCreateBoardPopupVisible ? "flex" : "hidden",
      )}
      onClick={() => setIsCreateBoardPopupVisible(!isCreateBoardPopupVisible)}
    >
      {isLoading ? (
        <div className="mx-auto grid w-[95%] max-w-[480px] place-items-center rounded-[6px] bg-foreground p-6">
          <p className="animate-pulse text-kbPurpleSecondary">
            Creating board...
          </p>
        </div>
      ) : (
        <form
          className="mx-auto flex w-[95%] max-w-[480px] flex-col gap-6 rounded-[6px] bg-foreground p-6"
          onSubmit={handleBoardCreate}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="">
            <h2 className="heading-l mb-6">Create New Board</h2>
            <label htmlFor="board-name-12s6hs6">
              <span className="body-m text-kbMediumGrey">Board Name</span>
              <Input
                placeholder="e.g. Web Design"
                id="board-name-12s6hs6"
                onChange={(e) => setBoardName(e.target.value)}
              />
            </label>
          </div>

          <div className="flex flex-col">
            <span className="body-m mb-2 text-kbMediumGrey">Board Columns</span>

            <ul className="flex flex-col gap-2">
              {columns.map((column) => (
                <li className="flex items-center gap-4" key={column.id}>
                  <Input
                    value={column.columnName}
                    onChange={(e) =>
                      handleColumnNameChange(
                        column.id,
                        e.target.value,
                        columns,
                        setColumns,
                      )
                    }
                  />
                  <Image
                    src="/icons/icon-cross.svg"
                    alt="icon-cross"
                    width={14}
                    height={14}
                    onClick={() =>
                      deleteColumnField(column.id, columns, setColumns)
                    }
                  />
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              className="mt-3"
              type="button"
              onClick={() => addNewColumn(columns, setColumns)}
            >
              + Add New Column
            </Button>
          </div>

          <Button type="submit" className="body-l">
            Create New Board
          </Button>
        </form>
      )}
    </div>
  );
};

export default CreateBoardPopup;
