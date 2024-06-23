import React from "react";
import { Button } from "./ui/button";

const DeleteBoardPopup = ({
  boardOptionsVisible,
  setBoardOptionsVisible,
  selectedBoard,
}: {
  boardOptionsVisible: boolean;
  setBoardOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBoard: string;
}) => {
  return (
    <div className="absolute w-3/4 max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground p-6 tablet:p-8 rounded-[6px] z-30">
      <h2 className="heading-l text-kbRed">Delete this board?</h2>
      <p className="text-kbMediumGrey my-6">
        Are you sure you want to delete the ‘{selectedBoard}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex flex-col gap-4 tablet:flex-row">
        <Button className="w-full" variant="destructive">
          Delete
        </Button>
        <Button
          className="w-full"
          onClick={() => setBoardOptionsVisible(!boardOptionsVisible)}
          variant="secondary"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteBoardPopup;
