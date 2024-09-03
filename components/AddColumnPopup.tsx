import { useState } from "react";
import { useSidebar } from "@/context/sidebarContext";
import { useQueryClient } from "react-query";
import { addColumn } from "@/actions/actions.boardsAndCols";
import { cn } from "@/lib/utils";

import TextField from "./TextField";
import { Button } from "./ui/button";

const AddColumnPopup = () => {
  const { isAddColumnPopupVisible, setIsAddColumnPopupVisible, selectedBoard } =
    useSidebar();
  const [columnName, setColumnName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const handleColumnAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addColumn(selectedBoard.boardID, columnName);
      queryClient.invalidateQueries(["columns", selectedBoard.boardID]);
      setIsAddColumnPopupVisible(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-20 h-screen w-screen bg-black/50",
        !isAddColumnPopupVisible && "hidden",
      )}
      onClick={(e) => {
        setIsAddColumnPopupVisible(true);
        e.stopPropagation();
      }}
    >
      <form
        onSubmit={handleColumnAdd}
        onClick={(e) => e.stopPropagation()}
        className="absolute left-1/2 top-1/2 z-30 flex w-3/4 max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-7 rounded-[6px] bg-foreground p-6 tablet:p-8"
      >
        {isLoading ? (
          <div>
            <p className="animate-pulse text-kbPurpleSecondary">Loading...</p>
          </div>
        ) : (
          <>
            <div>
              <h2 className="heading-l text-kbPurpleMain">Add Column</h2>
              <p className="text-kbMediumGrey">{selectedBoard.boardName}</p>
            </div>
            <TextField isValid={true} method={setColumnName} />
            <div className="flex flex-col gap-4 tablet:flex-row">
              <Button type="submit" className="body-l w-full">
                Add
              </Button>
              <Button
                type="button"
                className="w-full"
                variant="secondary"
                onClick={() => setIsAddColumnPopupVisible(false)}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddColumnPopup;
