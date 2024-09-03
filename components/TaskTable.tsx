import { useQuery } from "react-query";
import { getTasks } from "@/actions/actions.boardsAndCols";

import { Button } from "./ui/button";
import Task from "./Task";

const TaskTable = ({ columnID }: { columnID: string }) => {
  const {
    data: tasks = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(["tasks", columnID], () => getTasks(columnID), {
    refetchOnWindowFocus: false,
  });

  if (isLoading)
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
    <div className="mt-6 flex w-full flex-col gap-5 rounded-[8px]">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      <Button className="w-full rounded-[8px]" variant="ghost">
        Add Task
      </Button>
    </div>
  );
};

export default TaskTable;
