import { account, databases } from "@/lib/appwrite";
import { ID, Query } from "appwrite";

const DATABASE_ID = `${process.env.NEXT_PUBLIC_APP_DB_ID}`;
const BOARDS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_BOARDS_ID}`;
const COLUMNS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_COLUMNS_ID}`;
const TASKS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_TASKS_ID}`;
const SUBTASKS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_SUBTASKS_ID}`;

export const addNewColumn = (
  columns: Column[],
  setColumns: SetColumns,
): void => {
  const newId = ID.unique();
  setColumns([...columns, { columnName: "", id: newId }]);
};

export const deleteColumnField = (
  id: string,
  columns: Column[],
  setColumns: SetColumns,
): void => {
  setColumns(columns.filter((column) => column.id !== id));
};

export const handleColumnNameChange = (
  id: string,
  newName: string,
  columns: Column[],
  setColumns: SetColumns,
): void => {
  setColumns(
    columns.map((column) =>
      column.id === id ? { ...column, columnName: newName } : column,
    ),
  );
};

export const createNewBoard = async (boardName: string, columns: Column[]) => {
  const newBoardID = ID.unique();

  try {
    await databases.createDocument(
      DATABASE_ID,
      BOARDS_COLLECTION_ID,
      newBoardID,
      { name: boardName, userID: (await account.get()).$id },
    );

    if (columns.length !== 0) {
      columns.forEach(async (column) => {
        await databases.createDocument(
          DATABASE_ID,
          COLUMNS_COLLECTION_ID,
          ID.unique(),
          { name: column.columnName, boardID: newBoardID },
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserBoards = async () => {
  try {
    const user = await account.get();
    const response = await databases.listDocuments(
      DATABASE_ID,
      BOARDS_COLLECTION_ID,
      [Query.equal("userID", user.$id)],
    );

    const boards = response.documents.map((doc) => ({
      boardName: doc.name,
      boardID: doc.$id,
    }));

    return boards;
  } catch (error) {
    console.log(error);
  }
};

export const getBoardColumns = async (boardID: string) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLUMNS_COLLECTION_ID,
      [Query.equal("boardID", boardID)],
    );

    const columns: Column[] = response.documents.map((doc) => ({
      columnName: doc.name,
      id: doc.$id,
    }));

    return columns;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBoard = async (boardID: string) => {
  try {
    await databases.deleteDocument(DATABASE_ID, BOARDS_COLLECTION_ID, boardID);
  } catch (error) {
    console.log(error);
  }
};
export const addColumn = async (boardID: string, columnName: string) => {
  try {
    await databases.createDocument(
      DATABASE_ID,
      COLUMNS_COLLECTION_ID,
      ID.unique(),
      {
        name: columnName,
        boardID: boardID,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async (columnID: string) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TASKS_COLLECTION_ID,
      [Query.equal("columnID", columnID)],
    );

    const tasks: Task[] = response.documents.map((doc) => ({
      id: doc.$id,
      taskTitle: doc.title,
      taskDescription: doc.description,
      taskStatus: doc.status,
      columnID: doc.columnID,
    }));

    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const addTask = async (
  columnID: string,
  taskTitle: string,
  taskDescription: string,
  taskStatus: string,
) => {
  try {
    await databases.createDocument(
      DATABASE_ID,
      TASKS_COLLECTION_ID,
      ID.unique(),
      {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        columnID: columnID,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const handleSubtaskNameChange = (
  id: string,
  newName: string,
  subtasks: Subtask[],
  setSubtasks: setSubtasks,
): void => {
  setSubtasks(
    subtasks.map((subtask) =>
      subtask.id === id ? { ...subtask, subtaskName: newName } : subtask,
    ),
  );
};

export const addNewSubtask = (
  subtasks: Subtask[],
  setSubtasks: setSubtasks,
): void => {
  const newId = ID.unique();
  setSubtasks([...subtasks, { subtaskName: "", id: newId }]);
};

export const deleteSubtaskField = (
  id: string,
  subtasks: Subtask[],
  setSubtasks: setSubtasks,
): void => {
  setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
};
