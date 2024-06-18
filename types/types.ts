type boardType = {
  boardName: string;
  boardID: string;
};

type SidebarBoardsListType = {
  boards: boardType[];
  setSelectedBoard: React.Dispatch<React.SetStateAction<string>>;
  selectedBoard: string;
};
