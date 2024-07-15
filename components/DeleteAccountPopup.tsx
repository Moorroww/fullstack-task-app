import { deleteAccount } from "@/actions/actions.user";
import { useSidebar } from "@/context/sidebarContext";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const DeleteAccountPopup = () => {
  const { isDeleteAccountPopupOpen, setIsDeleteAccountPopupOpen } =
    useSidebar();
  return (
    <div
      className={cn(
        "bg-black/50 absolute w-screen h-screen top-0 left-0 z-20",
        !isDeleteAccountPopupOpen && "hidden"
      )}
      onClick={(e) => {
        setIsDeleteAccountPopupOpen(!isDeleteAccountPopupOpen);
        e.stopPropagation();
      }}
    >
      <div className="absolute w-3/4 max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground p-6 tablet:p-8 rounded-[6px] z-30">
        <h2 className="heading-l text-kbRed">Delete account?</h2>
        <p className="text-kbMediumGrey my-6">
          Account deletion is irreversible. Are you sure you want to delete your
          account?
        </p>
        <div className="flex flex-col gap-4 tablet:flex-row">
          <Button
            className="w-full"
            variant="destructive"
            onClick={deleteAccount}
          >
            Delete
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            onClick={() =>
              setIsDeleteAccountPopupOpen(!isDeleteAccountPopupOpen)
            }
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;
