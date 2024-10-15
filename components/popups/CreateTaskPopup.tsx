import AddTaskForm from "../AddTaskForm";

const AddTaskPopup = () => {
  return (
    <>
      <div
        className="absolute left-1/2 top-1/2 w-[95%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-background p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="heading-l mb-6">Add New Task</h2>
        <AddTaskForm />
      </div>
    </>
  );
};

export default AddTaskPopup;
