import { usePopupsStore } from "@/stores/store.popups";
import { cn } from "@/lib/utils";

import AddTaskForm from "./AddTaskForm";

const AddTaskPopup = () => {
  const { isAddTaskPopupVisible, setIsAddTaskPopupVisible } = usePopupsStore();
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-20 h-screen w-screen bg-black/50",
        !isAddTaskPopupVisible && "hidden",
      )}
      onClick={() => setIsAddTaskPopupVisible(false)}
    >
      <div
        className="absolute left-1/2 top-1/2 w-[95%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-background p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="heading-l mb-6">Add New Task</h2>
        <AddTaskForm />
      </div>
    </div>
  );
};

export default AddTaskPopup;
