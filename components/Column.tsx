import React from "react";

const Column = ({ col }: { col: Column }) => {
  return (
    <div className="h-full min-w-[280px]">
      <div className="flex items-center gap-2">
        <div className="size-4 rounded-full bg-blue-500"></div>
        <span className="text-kbMediumGrey">
          {col.columnName} (taskCountHere)
        </span>
      </div>
    </div>
  );
};

export default Column;
