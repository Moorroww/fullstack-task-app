import { ID } from "appwrite";

type SetColumns = React.Dispatch<React.SetStateAction<Column[]>>;

export const addNewColumn = (
  columns: Column[],
  setColumns: SetColumns
): void => {
  const newId = ID.unique();
  setColumns([...columns, { columnName: "", id: newId }]);
};

export const deleteField = (
  id: string,
  columns: Column[],
  setColumns: SetColumns
): void => {
  setColumns(columns.filter((column) => column.id !== id));
};

export const handleColumnNameChange = (
  id: string,
  newName: string,
  columns: Column[],
  setColumns: SetColumns
): void => {
  setColumns(
    columns.map((column) =>
      column.id === id ? { ...column, columnName: newName } : column
    )
  );
};

export const createNewBoard = (columns: Column[], boardName: string): void => {
  // create new board logic
};
