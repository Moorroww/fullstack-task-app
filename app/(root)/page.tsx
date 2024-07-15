"use client";
import { useSidebar } from "@/context/sidebarContext";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { selectedBoard } = useSidebar();
  return (
    <div className="size-full grid place-items-center">
      <div className="text-center flex flex-col items-center gap-8 ">
        <p className="heading-l text-kbMediumGrey">
          This board is empty. Create a new column to get started.
        </p>
        <Button disabled={selectedBoard == ""}>+ Add New Column</Button>
      </div>
    </div>
  );
};

export default HomePage;
