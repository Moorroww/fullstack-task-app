import { useQuery } from "react-query";
import { getTasks } from "@/actions/actions.boardsAndCols";

import TaskTable from "./TaskTable";

const Column = ({ col }: { col: Column }) => {
  const { data: tasks = [] } = useQuery(
    ["tasks", col.id],
    () => getTasks(col.id),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className="h-full min-w-[280px] overflow-scroll">
      <div className="flex items-center gap-2">
        <div className="size-4 rounded-full bg-blue-500"></div>
        <p className="text-kbMediumGrey">
          {col.columnName} ({tasks.length})
        </p>
      </div>
      <TaskTable columnID={col.id} columnName={col.columnName} />
    </div>
  );
};

export default Column;
