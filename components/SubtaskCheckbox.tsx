"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

const SubtaskCheckbox = ({
  taskName,
  taskID,
}: {
  taskName: string;
  taskID: string;
}) => {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <label
      htmlFor={taskID}
      className={cn(
        "flex items-center gap-4 pl-3 py-3 rounded font-bold bg-background hover:bg-kbPurpleMain/25 cursor-pointer text-[12px]",
        isDone && "line-through text-[#7a7c88]"
      )}
    >
      <Checkbox
        id={taskID}
        className="pointer-events-auto"
        checked={isDone}
        onClick={() => setIsDone(!isDone)}
      />{" "}
      {taskName}
    </label>
  );
};

export default SubtaskCheckbox;
