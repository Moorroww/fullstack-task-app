"use client";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

const TextField = ({
  isValid,
  method,
}: {
  isValid: boolean;
  method: (e: string) => void;
}) => {
  return (
    <div className="relative">
      <Input
        placeholder="Enter task name"
        className={cn("", isValid != true && "border-kbRed")}
        onChange={(e) => method(e.target.value)}
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
