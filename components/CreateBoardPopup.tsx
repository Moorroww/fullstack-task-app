import { useState } from "react";
import { useSidebar } from "@/context/sidebarContext";
import { cn } from "@/lib/utils";
import { ID } from "appwrite"; //temp id generation
import {
  handleColumnNameChange,
  deleteField,
  addNewColumn,
  createNewBoard,
} from "@/actions/actions.boardsAndCols";

import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreateBoardPopup = () => {
  const { isCreateBoardPopupVisible, setIsCreateBoardPopupVisible } =
    useSidebar();
  const [columns, setColumns] = useState([{ columnName: "", id: ID.unique() }]);
  const [boardName, setBoardName] = useState("");

  const handleBoardCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await createNewBoard(boardName);
      setIsCreateBoardPopupVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={cn(
        "absolute z-30 h-screen w-screen top-0 left-0 bg-black/50 grid place-items-center",
        isCreateBoardPopupVisible ? "flex" : "hidden"
      )}
      onClick={() => setIsCreateBoardPopupVisible(!isCreateBoardPopupVisible)}
    >
      <form
        className="w-[95%] max-w-[480px] mx-auto p-6 bg-foreground rounded-[6px] flex flex-col gap-6"
        onSubmit={(e) => handleBoardCreate(e)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="">
          <h2 className="mb-6 heading-l">Create New Board</h2>
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
          <span className="body-m text-kbMediumGrey mb-2">Board Columns</span>
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
                      setColumns
                    )
                  }
                />
                <Image
                  src="/icons/icon-cross.svg"
                  alt="icon-cross"
                  width={14}
                  height={14}
                  onClick={() => deleteField(column.id, columns, setColumns)}
                />
              </li>
            ))}
          </ul>
          <Button
            variant="secondary"
            className="mt-3"
            onClick={() => addNewColumn(columns, setColumns)}
          >
            + Add New Column
          </Button>
        </div>

        <Button type="submit" className="body-l">
          Create New Board
        </Button>
      </form>
    </div>
  );
};

export default CreateBoardPopup;
