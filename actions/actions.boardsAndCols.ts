import { account, databases } from "@/lib/appwrite";
import { ID, Query } from "appwrite";

type SetColumns = React.Dispatch<React.SetStateAction<Column[]>>;

const DATABASE_ID = `${process.env.NEXT_PUBLIC_APP_DB_ID}`;
const BOARDS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_BOARDS_ID}`;
const COLUMNS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_COLUMNS_ID}`;
const TASKS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_TASKS_ID}`;
const SUBTASKS_COLLECTION_ID = `${process.env.NEXT_PUBLIC_APP_DB_SUBTASKS_ID}`;

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

export const createNewBoard = async (boardName: string) => {
  try {
    await databases.createDocument(
      DATABASE_ID,
      BOARDS_COLLECTION_ID,
      ID.unique(),
      { name: boardName, userID: (await account.get()).$id }
    );
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
      [Query.equal("userID", user.$id)]
    );

    const boards = response.documents.map((doc) => ({
      boardName: doc.name,
      boardID: doc.$id,
    }));

    console.log(boards);
    return boards;
  } catch (error) {
    console.log(error);
  }
};
