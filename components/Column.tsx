import React from "react";
import TaskTable from "./TaskTable";

const Column = ({ col }: { col: Column }) => {
  return (
    <div className="h-full min-w-[280px]">
      <div className="flex items-center gap-2">
        <div className="size-4 rounded-full bg-blue-500"></div>
        <p className="text-kbMediumGrey">{col.columnName} (taskCountHere)</p>
      </div>
      <TaskTable columnID={col.id} />
    </div>
  );
};

export default Column;
