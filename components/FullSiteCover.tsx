import React from "react";

const FullSiteCover = ({
  boardOptionsVisible,
  setBoardOptionsVisible,
}: {
  boardOptionsVisible: boolean;
  setBoardOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setBoardOptionsVisible(!boardOptionsVisible)}
      className="absolute left-0 top-0 h-screen w-screen bg-black/50 z-20"
    ></div>
  );
};

export default FullSiteCover;