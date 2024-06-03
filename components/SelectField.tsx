"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";

const SelectField = () => {
  const [taskState, setTaskState] = useState<string>("");

  return (
    <Select onValueChange={(value) => setTaskState(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={taskState || "Select task status"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Todo">Todo</SelectItem>
        <SelectItem value="Doing">Doing</SelectItem>
        <SelectItem value="Done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
