import { create } from "zustand";

type StoreBoards = {
  selectedBoard: boardType;
  setSelectedBoard: (board: boardType) => void;
};

export const useBoardsStore = create<StoreBoards>((set) => ({
  selectedBoard: {
    boardName: "",
    boardID: "",
  },
  setSelectedBoard: (selectedBoard) => set({ selectedBoard }),
}));
