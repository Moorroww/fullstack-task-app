import { deleteAccount } from "@/actions/actions.user";
import { usePopupsStore } from "@/stores/store.popups";

import { Button } from "../ui/button";

const DeleteAccountPopup = () => {
  const { setPopup } = usePopupsStore();
  return (
    <>
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
            onClick={() => setPopup("")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeleteAccountPopup;
