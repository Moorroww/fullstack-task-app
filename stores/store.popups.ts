import { create } from "zustand";

type StorePopup = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (isSidebarVisible: boolean) => void;
  isCreateBoardPopupVisible: boolean;
  setIsCreateBoardPopupVisible: (isCreateBoardPopupVisible: boolean) => void;
  isDeleteAccountPopupOpen: boolean;
  setIsDeleteAccountPopupOpen: (isDeleteAccountPopupOpen: boolean) => void;
  isAddColumnPopupVisible: boolean;
  setIsAddColumnPopupVisible: (isAddColumnPopupVisible: boolean) => void;
};

export const usePopupsStore = create<StorePopup>()((set) => ({
  isSidebarVisible: true,
  setIsSidebarVisible: (isSidebarVisible) => set({ isSidebarVisible }),
  isCreateBoardPopupVisible: false,
  setIsCreateBoardPopupVisible: (isCreateBoardPopupVisible) =>
    set({ isCreateBoardPopupVisible }),
  isDeleteAccountPopupOpen: false,
  setIsDeleteAccountPopupOpen: (isDeleteAccountPopupOpen) =>
    set({ isDeleteAccountPopupOpen }),
  isAddColumnPopupVisible: false,
  setIsAddColumnPopupVisible: (isAddColumnPopupVisible: boolean) =>
    set({ isAddColumnPopupVisible }),
}));
