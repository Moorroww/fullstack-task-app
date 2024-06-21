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
};
