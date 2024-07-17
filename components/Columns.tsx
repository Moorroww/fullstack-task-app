import { useEffect, useState } from "react";
import { getBoardColumns } from "@/actions/actions.boardsAndCols";
import { useSidebar } from "@/context/sidebarContext";

import Column from "./Column";
import { Button } from "./ui/button";

const Columns = () => {
  const { selectedBoard, setIsAddColumnPopupVisible } = useSidebar();
  const [cols, setCols] = useState<Column[]>([]);

  useEffect(() => {
    const fetchColumns = async () => {
      const columns = await getBoardColumns(selectedBoard.boardID);
      setCols(columns || []);
    };

    fetchColumns();
  }, [selectedBoard]);

  return (
    <div className="grid">
      {cols.length === 0 ? (
        <div className="text-center flex flex-col items-center gap-8 place-self-center">
          <p className="heading-l text-kbMediumGrey">
            This board is empty. Create a new column to get started.
          </p>
          <Button disabled={selectedBoard.boardName == ""}>
            + Add New Column
          </Button>
        </div>
      ) : (
        <div className="w-full px-6 pt-6 flex gap-6 overflow-scroll">
          {cols.map((col, index) => (
            <Column key={index} col={col} />
          ))}

          <div
            className="h-[98%] min-w-[280px] flex items-center justify-center bg-foreground/40 rounded-[6px] cursor-pointer"
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
