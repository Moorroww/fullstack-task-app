import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBoard: boardType;
  setSelectedBoard: React.Dispatch<React.SetStateAction<boardType>>;
  isCreateBoardPopupVisible: boolean;
  setIsCreateBoardPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteAccountPopupOpen: boolean;
  setIsDeleteAccountPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddColumnPopupVisible: boolean;
  setIsAddColumnPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [selectedBoard, setSelectedBoard] = useState<boardType>({
    boardName: "",
    boardID: "",
  });
  const [isCreateBoardPopupVisible, setIsCreateBoardPopupVisible] =
    useState<boolean>(false);
  const [isDeleteAccountPopupOpen, setIsDeleteAccountPopupOpen] =
    useState<boolean>(false);
  const [isAddColumnPopupVisible, setIsAddColumnPopupVisible] =
    useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarVisible,
        setIsSidebarVisible,
        selectedBoard,
        setSelectedBoard,
        isCreateBoardPopupVisible,
        setIsCreateBoardPopupVisible,
        isDeleteAccountPopupOpen,
        setIsDeleteAccountPopupOpen,
        isAddColumnPopupVisible,
        setIsAddColumnPopupVisible,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
