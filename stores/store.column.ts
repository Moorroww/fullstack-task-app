import { create } from "zustand";

type StoreColumns = {
  selectedColumn: Column;
  setSelectedColumn: (column: Column) => void;
};

export const useColumns = create<StoreColumns>((set) => ({
  selectedColumn: {
    columnName: "",
    id: "",
  },
  setSelectedColumn: (selectedColumn) => set({ selectedColumn }),
}));
