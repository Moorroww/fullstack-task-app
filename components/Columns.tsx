import { useQuery } from "react-query";
import { getBoardColumns } from "@/actions/actions.boardsAndCols";
import { usePopupsStore } from "@/stores/store.popups";
import { useBoardsStore } from "@/stores/store.boards";

import Column from "./Column";
import { Button } from "./ui/button";

const Columns = () => {
  const { selectedBoard } = useBoardsStore();
  const { setIsAddColumnPopupVisible } = usePopupsStore();

  const { data: cols = [], refetch } = useQuery(
    ["columns", selectedBoard.boardID],
    () => getBoardColumns(selectedBoard.boardID),
    {
      enabled: !!selectedBoard.boardID,
    },
  );

  return (
    <div className="grid">
      {cols.length === 0 ? (
        <div className="flex flex-col items-center gap-8 place-self-center text-center">
          <p className="heading-l text-kbMediumGrey">
            This board is empty. Create a new column to get started.
          </p>
          <Button
            disabled={selectedBoard.boardID === ""}
            onClick={() => setIsAddColumnPopupVisible(true)}
          >
            + Add New Column
          </Button>
        </div>
      ) : (
        <div className="flex w-full gap-6 overflow-scroll px-6 pt-6">
          {cols.map((col, index) => (
            <Column key={index} col={col} />
          ))}

          <div
            className="flex h-[98%] min-w-[280px] cursor-pointer items-center justify-center rounded-[6px] bg-foreground/40"
            onClick={() => setIsAddColumnPopupVisible(true)}
          >
            <p className="heading-xl text-kbMediumGrey">+New Column</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Columns;
