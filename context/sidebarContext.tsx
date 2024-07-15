import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBoard: string;
  setSelectedBoard: React.Dispatch<React.SetStateAction<string>>;
  isCreateBoardPopupVisible: boolean;
  setIsCreateBoardPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteAccountPopupOpen: boolean;
  setIsDeleteAccountPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [selectedBoard, setSelectedBoard] = useState<string>("");
  const [isCreateBoardPopupVisible, setIsCreateBoardPopupVisible] =
    useState<boolean>(false);
  const [isDeleteAccountPopupOpen, setIsDeleteAccountPopupOpen] =
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
