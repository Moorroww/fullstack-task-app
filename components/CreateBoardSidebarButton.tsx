import { usePopupsStore } from "@/stores/store.popups";

import BoardIcon from "@/public/icons/BoardIcon";

const CreateBoardSidebarButton = () => {
  const { setIsSidebarVisible, setPopup } = usePopupsStore();

  return (
    <div className="heading-m mr-6 flex cursor-pointer items-center gap-4 py-4 pl-8 text-kbPurpleMain">
      <BoardIcon fill="#635fc7" />
      <span
        className="text-kbPurpleMain"
        onClick={() => {
          setPopup("createBoard");
          window.innerWidth < 768 && setIsSidebarVisible(false);
        }}
      >
        + Create New Board
      </span>
    </div>
  );
};

export default CreateBoardSidebarButton;
