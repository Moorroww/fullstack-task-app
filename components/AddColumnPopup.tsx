import { useState } from "react";
import { useSidebar } from "@/context/sidebarContext";
import { addColumn } from "@/actions/actions.boardsAndCols";
import { cn } from "@/lib/utils";

import TextField from "./TextField";
import { Button } from "./ui/button";

const AddColumnPopup = () => {
  const { isAddColumnPopupVisible, setIsAddColumnPopupVisible, selectedBoard } =
    useSidebar();
  const [columnName, setColumnName] = useState<string>("");
  return (
    <div
      className={cn(
        "bg-black/50 absolute w-screen h-screen top-0 left-0 z-20",
        !isAddColumnPopupVisible && "hidden"
      )}
      onClick={(e) => {
        setIsAddColumnPopupVisible(!isAddColumnPopupVisible);
        e.stopPropagation();
      }}
    >
      <form
        onSubmit={() => addColumn(selectedBoard.boardID, columnName)}
        onClick={(e) => e.stopPropagation()}
        className="absolute w-3/4 max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground p-6 tablet:p-8 rounded-[6px] z-30 flex flex-col gap-7"
      >
        <div>
          <h2 className="heading-l text-kbPurpleMain">Add Column</h2>
          <p className="text-kbMediumGrey">{selectedBoard.boardName}</p>
        </div>
        <TextField isValid={true} method={setColumnName} />
        <div className="flex flex-col gap-4 tablet:flex-row">
          <Button type="submit" className="w-full body-l">
            Add
          </Button>
          <Button
            type="button"
            className="w-full"
            variant="secondary"
            onClick={() => setIsAddColumnPopupVisible(!isAddColumnPopupVisible)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddColumnPopup;
