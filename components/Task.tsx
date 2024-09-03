const Task = ({ task }: { task: Task }) => {
  return (
    <div className="cursor-pointer rounded-md bg-foreground p-3 px-4 py-[23px] transition-shadow duration-150 hover:shadow-[0px_0px_22px_1px_#635FC7]">
      <h3 className="heading-m mb-2 text-text">{task.taskTitle}</h3>
      <p className="body-m text-kbMediumGrey">{task.taskDescription}</p>
    </div>
  );
};

export default Task;