import useUser from "@/hooks/useUser";
import { logoutUser } from "@/actions/actions.user";

import { LogOut, User } from "lucide-react";

const UserTab = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-6 py-3 bg-background rounded-[6px] ">
        <User size={16} className="stroke-kbMediumGrey" />
        <span className="text-kbMediumGrey">{user?.name}</span>
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
