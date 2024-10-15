import { cn } from "@/lib/utils";
import { usePopupsStore } from "@/stores/store.popups";

import CreateBoardPopup from "./popups/CreateBoardPopup";
import AddColumnPopup from "./popups/CreateColumnPopup";
import AddTaskPopup from "./popups/CreateTaskPopup";
import DeleteAccountPopup from "./popups/DeleteAccountPopup";

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
