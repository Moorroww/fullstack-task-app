import { logoutUser } from "@/actions/actions.user";
import useUser from "@/hooks/useUser";
import { useSidebar } from "@/context/sidebarContext";

import { LogOut, User } from "lucide-react";
import Image from "next/image";

const UserTab = () => {
  const { user } = useUser();
  const { setIsDeleteAccountPopupOpen } = useSidebar();

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex w-[70%] justify-between items-center gap-2 px-6 py-3 bg-background rounded-[6px] cursor-pointer"
        onClick={() => setIsDeleteAccountPopupOpen(true)}
      >
        <div className="flex gap-2 items-center">
          <User size={16} className="stroke-kbMediumGrey" />
          <span className="text-kbMediumGrey">{user?.name}</span>
        </div>
        <Image
          src="/icons/icon-vertical-ellipsis.svg"
          width={5}
          height={20}
          alt=""
          className="h-4 w-1 "
        />
      </div>
      <div
        className="px-6 py-4 bg-background rounded-[6px] cursor-pointer"
        onClick={logoutUser}
      >
        <LogOut size={16} className="stroke-kbMediumGrey" />
      </div>
    </div>
  );
};

export default UserTab;
