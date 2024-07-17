import { useSidebar } from "@/context/sidebarContext";

import Columns from "./Columns";

const ColumnsMainSection = () => {
  const { selectedBoard } = useSidebar();

  return (
    <div className="size-full grid">
      {selectedBoard.boardName !== "" ? (
        <Columns />
      ) : (
        <p className="place-self-center heading-xl text-kbMediumGrey">
          Select the board to see your columns
        </p>
      )}
    </div>
  );
};

export default ColumnsMainSection;
