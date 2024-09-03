import { deleteAccount } from "@/actions/actions.user";
import { usePopupsStore } from "@/stores/store.popups";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const DeleteAccountPopup = () => {
  const { isDeleteAccountPopupOpen, setIsDeleteAccountPopupOpen } =
    usePopupsStore();
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-20 h-screen w-screen bg-black/50",
        !isDeleteAccountPopupOpen && "hidden",
      )}
      onClick={(e) => {
        setIsDeleteAccountPopupOpen(!isDeleteAccountPopupOpen);
        e.stopPropagation();
      }}
    >
      <div className="absolute left-1/2 top-1/2 z-30 w-3/4 max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-foreground p-6 tablet:p-8">
        <h2 className="heading-l text-kbRed">Delete account?</h2>
        <p className="my-6 text-kbMediumGrey">
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
