import { logoutUser } from "@/actions/actions.user";
import useUser from "@/hooks/useUser";
import { usePopupsStore } from "@/stores/store.popups";

import { LogOut, User } from "lucide-react";
import Image from "next/image";

const UserTab = () => {
  const { user } = useUser();
  const { setIsDeleteAccountPopupOpen } = usePopupsStore();

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex w-[70%] cursor-pointer items-center justify-between gap-2 rounded-[6px] bg-background px-6 py-3"
        onClick={() => setIsDeleteAccountPopupOpen(true)}
      >
        <div className="flex items-center gap-2">
          <User size={16} className="stroke-kbMediumGrey" />
          <span className="text-kbMediumGrey">{user?.name}</span>
        </div>
        <Image
          src="/icons/icon-vertical-ellipsis.svg"
          width={5}
          height={20}
          alt=""
          className="h-4 w-1"
        />
      </div>
      <div
        className="cursor-pointer rounded-[6px] bg-background px-6 py-4"
        onClick={logoutUser}
      >
        <LogOut size={16} className="stroke-kbMediumGrey" />
      </div>
    </div>
  );
};

export default UserTab;
