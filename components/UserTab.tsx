import { LogOut, User } from "lucide-react";
import React, { useEffect } from "react";
import { logoutUser } from "@/actions/actions.user";

const UserTab = () => {
  const userName = "john";

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-6 py-3 bg-background rounded-[6px] ">
        <User size={16} className="stroke-kbMediumGrey" />
        <span className="text-kbMediumGrey">{userName}</span>
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
