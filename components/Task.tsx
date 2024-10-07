import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const handleTaskEdit = (id: string) => {};
const handleTaskDelete = (id: string) => {};

const Task = ({ task }: { task: Task }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="cursor-pointer rounded-md bg-foreground px-4 py-[23px] transition-shadow duration-150 hover:shadow-[inset_0px_0px_2px_1px_#635FC7]">
          <h3 className="heading-m mb-2 text-text">{task.taskTitle}</h3>
          <p className="body-m text-kbMediumGrey">{task.taskDescription}</p>
        </div>

        <ContextMenuContent>
          Task actions
          <ContextMenuItem onClick={() => handleTaskEdit(task.id)}>
            Edit
          </ContextMenuItem>
          <ContextMenuItem onClick={() => handleTaskDelete(task.id)}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenuTrigger>
    </ContextMenu>
  );
};

export default Task;
