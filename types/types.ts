type boardType = {
  boardName: string;
  boardID: string;
};

type SidebarBoardsListType = {
  boards: boardType[];
  setSelectedBoard: React.Dispatch<React.SetStateAction<string>>;
  selectedBoard: string;
};

type FormInputFieldProps = {
  fieldName: string;
  type?: string;
  placeholder?: string;
  method: (e: string) => void;
  additionalClass?: string;
  value?: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

type Column = {
  columnName: string;
  id: string;
};

type SetColumns = React.Dispatch<React.SetStateAction<Column[]>>;

type Subtask = {
  subtaskName: string;
  id: string;
};

type setSubtasks = React.Dispatch<React.SetStateAction<Subtask[]>>;

type Task = {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskStatus: string;
  columnID: string;
};
