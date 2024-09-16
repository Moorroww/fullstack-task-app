import { create } from "zustand";

type PopupType = "createBoard" | "deleteAccount" | "addColumn" | "addTask" | "";

type StorePopup = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (isSidebarVisible: boolean) => void;
  popup: PopupType;
  setPopup: (isPopupVisible: PopupType) => void;
  // isDeleteAccountPopupOpen: boolean;
  // setIsDeleteAccountPopupOpen: (isDeleteAccountPopupOpen: boolean) => void;
  // isAddColumnPopupVisible: boolean;
  // setIsAddColumnPopupVisible: (isAddColumnPopupVisible: boolean) => void;
  // isAddTaskPopupVisible: boolean;
  // setIsAddTaskPopupVisible: (isAddTaskPopupVisible: boolean) => void;
};

export const usePopupsStore = create<StorePopup>()((set) => ({
  isSidebarVisible: true,
  setIsSidebarVisible: (isSidebarVisible) => set({ isSidebarVisible }),
  popup: "",
  setPopup: (popup) => set({ popup }),
  // isDeleteAccountPopupOpen: false,
  // setIsDeleteAccountPopupOpen: (isDeleteAccountPopupOpen) =>
  //   set({ isDeleteAccountPopupOpen }),
  // isAddColumnPopupVisible: false,
  // setIsAddColumnPopupVisible: (isAddColumnPopupVisible: boolean) =>
  //   set({ isAddColumnPopupVisible }),
  // isAddTaskPopupVisible: false,
  // setIsAddTaskPopupVisible: (isAddTaskPopupVisible: boolean) =>
  //   set({ isAddTaskPopupVisible }),
}));
