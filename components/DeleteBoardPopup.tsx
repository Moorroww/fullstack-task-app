import { useSidebar } from "@/context/sidebarContext";
import { deleteBoard } from "@/actions/actions.boardsAndCols";

import { Button } from "./ui/button";

const DeleteBoardPopup = ({
  boardOptionsVisible,
  setBoardOptionsVisible,
}: {
  boardOptionsVisible: boolean;
  setBoardOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { selectedBoard } = useSidebar();
  return (
    <form
      onSubmit={() => {
        deleteBoard(selectedBoard.boardID);
      }}
      className="absolute left-1/2 top-1/2 z-30 w-3/4 max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-foreground p-6 tablet:p-8"
    >
      <h2 className="heading-l text-kbRed">Delete this board?</h2>
      <p className="my-6 text-kbMediumGrey">
        Are you sure you want to delete the ‘{selectedBoard.boardName}’ board?
        This action will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex flex-col gap-4 tablet:flex-row">
        <Button type="submit" className="w-full" variant="destructive">
          Delete
        </Button>
        <Button
          type="button"
          className="w-full"
          onClick={() => setBoardOptionsVisible(!boardOptionsVisible)}
          variant="secondary"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default DeleteBoardPopup;
