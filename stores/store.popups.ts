import { create } from "zustand";

type PopupType = "createBoard" | "deleteAccount" | "addColumn" | "addTask" | "";

type StorePopup = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (isSidebarVisible: boolean) => void;
  popup: PopupType;
  setPopup: (isPopupVisible: PopupType) => void;
};

export const usePopupsStore = create<StorePopup>()((set) => ({
  isSidebarVisible: true,
  setIsSidebarVisible: (isSidebarVisible) => set({ isSidebarVisible }),
  popup: "",
  setPopup: (popup) => set({ popup }),
}));
