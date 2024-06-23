"use client";
import React from "react";

const MobileSidebarCover = ({
  isSidebarVisible,
  setIsSidebarVisible,
}: {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      className="tablet:hidden absolute top-[58.5px] left-0 w-screen h-full bg-black/50"
    ></div>
  );
};

export default MobileSidebarCover;
