import { useState } from "react";
import { useQuery } from "react-query";
import { getTasks } from "@/actions/actions.boardsAndCols";
import { usePopupsStore } from "@/stores/store.popups";
import { useColumns } from "@/stores/store.column";

import { Button } from "./ui/button";
import Task from "./Task";

const TaskTable = ({
  columnID,
  columnName,
}: {
  columnID: string;
  columnName: string;
}) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const { setPopup } = usePopupsStore();
  const { setSelectedColumn } = useColumns();

  const {
    data: tasks = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(["tasks", columnID], () => getTasks(columnID), {
    refetchOnWindowFocus: false,
  });

  if (isLoading || isAddingTask)
    return (
      <p className="mt-6 flex h-9 w-full animate-pulse rounded-[8px] bg-foreground"></p>
    );

  if (isError)
    return (
      <p className="mt-6 text-kbRed">
        Error loading tasks for this column. Check internet connection or try
        again later.
      </p>
    );

  return (
    <div className="my-6 flex w-full flex-col gap-6 rounded-[8px]">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      <Button
        className="w-full rounded-[8px]"
        variant="ghost"
        onClick={() => {
          setPopup("addTask");
          setSelectedColumn({ id: columnID, columnName: columnName });
        }}
      >
        Add Task
      </Button>
    </div>
  );
};

export default TaskTable;
