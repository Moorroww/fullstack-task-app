import { useBoardsStore } from "@/stores/store.boards";

import Columns from "./Columns";

const ColumnsMainSection = () => {
  const { selectedBoard } = useBoardsStore();

  return (
    <div className="grid size-full overflow-scroll">
      {selectedBoard.boardID !== "" ? (
        <Columns />
      ) : (
        <p className="heading-xl place-self-center text-kbMediumGrey">
          Select the board to see your columns
        </p>
      )}
    </div>
  );
};

export default ColumnsMainSection;
