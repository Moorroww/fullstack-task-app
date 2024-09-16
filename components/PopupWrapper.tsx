import { cn } from "@/lib/utils";
import { usePopupsStore } from "@/stores/store.popups";

import CreateBoardPopup from "./CreateBoardPopup";
import AddColumnPopup from "./AddColumnPopup";
import AddTaskPopup from "./AddTaskPopup";
import DeleteAccountPopup from "./DeleteAccountPopup";

const PopupWrapper = () => {
  const { popup, setPopup } = usePopupsStore();

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-50 grid h-screen w-screen place-items-center bg-black/50",
        popup !== "" ? "flex" : "hidden",
      )}
      onClick={(e) => {
        e.stopPropagation();
        setPopup("");
      }}
    >
      {popup === "createBoard" && <CreateBoardPopup />}
      {popup === "deleteAccount" && <DeleteAccountPopup />}
      {popup === "addColumn" && <AddColumnPopup />}
      {popup === "addTask" && <AddTaskPopup />}
      {popup === "" && null}
    </div>
  );
};

export default PopupWrapper;
