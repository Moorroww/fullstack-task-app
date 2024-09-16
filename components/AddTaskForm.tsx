import { useState } from "react";
import { useQueryClient } from "react-query";
import { useColumns } from "@/stores/store.column";
import { usePopupsStore } from "@/stores/store.popups";
import {
  handleSubtaskNameChange,
  deleteSubtaskField,
  addNewSubtask,
  addTask,
} from "@/actions/actions.boardsAndCols";

import Image from "next/image";
import FormInputField from "./ui/FormInputField";
import FormTextareaField from "./ui/FormTextareaField";
import SelectField from "./ui/SelectField";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddTaskForm = () => {
  const queryClient = useQueryClient();
  const { selectedColumn } = useColumns();
  const { setPopup } = usePopupsStore();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [status, setStatus] = useState<string>("");
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleTaskAddition = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsAddingTask(true);
    try {
      await addTask(selectedColumn.id, title, description, status);
      queryClient.invalidateQueries(["tasks", selectedColumn.id]);
      setPopup("");
      setTitle("");
      setDescription("");
      setSubtasks([]);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsAddingTask(false);
    }
  };

  return (
    <form
      action=""
      className="flex w-full flex-col gap-6"
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleTaskAddition}
    >
      <div className="">
        <p className="mb-2">Title</p>
        <FormInputField
          fieldName=""
          type="text"
          placeholder="e.g. Take coffee break"
          method={setTitle}
          additionalClass="col-span-full"
          value={title}
        />
      </div>

      <div>
        <p className="mb-2">Description</p>
        <FormTextareaField
          fieldName=""
          method={setDescription}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
          value={description}
        />
      </div>

      <div>
        <p className="mb-2">Subtasks</p>
        <ul className="flex flex-col gap-2">
          {subtasks.map((subtask) => (
            <li className="flex items-center gap-4" key={subtask.id}>
              <Input
                value={subtask.subtaskName}
                onChange={(e) =>
                  handleSubtaskNameChange(
                    subtask.id,
                    e.target.value,
                    subtasks,
                    setSubtasks,
                  )
                }
              />
              <Image
                src="/icons/icon-cross.svg"
                alt="icon-cross"
                width={14}
                height={14}
                onClick={() =>
                  deleteSubtaskField(subtask.id, subtasks, setSubtasks)
                }
              />
            </li>
          ))}
        </ul>

        <Button
          variant="secondary"
          className="mt-3 w-full"
          type="button"
          onClick={() => addNewSubtask(subtasks, setSubtasks)}
        >
          + Add New Subtask
        </Button>
      </div>

      <div>
        <p className="mb-2">Status</p>
        <SelectField status={status} setStatus={setStatus} />
      </div>

      <Button className="body-l" type="submit" disabled={isAddingTask}>
        {isAddingTask ? (
          <span className="animate-pulse">Adding task...</span>
        ) : (
          "Add Task"
        )}
      </Button>
      {isError && (
        <p className="text-kbRed">
          Error adding task. Check internet connection or try again later.
        </p>
      )}
    </form>
  );
};

export default AddTaskForm;
