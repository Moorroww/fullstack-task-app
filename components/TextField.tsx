"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { useState } from "react";

const TextField = ({ isValid }: { isValid: boolean }) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="relative">
      <Input
        placeholder="Enter task name"
        className={cn("", isValid != true && "border-kbRed")}
      />
      {isValid != true && (
        <span className="absolute top-[50%] -translate-y-[50%] right-2 text-kbRed">
          Can't be empty
        </span>
      )}
    </div>
  );
};

export default TextField;
