"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SelectField = ({
  status,
  setStatus,
}: {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select onValueChange={(value) => setStatus(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={status || "Select task status"} />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem value="Todo">Todo</SelectItem>
        <SelectItem value="Doing">Doing</SelectItem>
        <SelectItem value="Done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
