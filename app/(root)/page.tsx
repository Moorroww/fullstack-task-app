import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="size-full grid place-items-center">
      <div className="text-center flex flex-col items-center gap-8 ">
        <p className="heading-l text-kbMediumGrey">
          This board is empty. Create a new column to get started.
        </p>
        <Button>+ Add New Column</Button>
      </div>
    </div>
  );
};

export default HomePage;
