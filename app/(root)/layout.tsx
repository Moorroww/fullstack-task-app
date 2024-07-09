"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MobileSidebarCover from "@/components/MobileSidebarCover";
import ShowSidebarButton from "@/components/ShowSidebarButton";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import useAuth from "@/hooks/useAuth";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<string>("");

  // temp boards data, fetching from API will be implemented later
  const boards: boardType[] = [
    { boardName: "Platform Launch", boardID: "1s78293xydn" },
    { boardName: "Marketing plan", boardID: "2xny3d927h" },
    { boardName: "Roadmap", boardID: "3xndm93d7y2" },
  ];

  // Here basically I try to refresh theme value so components in Topbar
  // and Sidebar will render properly with the correct theme
  useEffect(() => {
    setMounted(true);
    setTheme(theme == "dark" ? "dark" : "light");
  }, [setTheme]);

  // Set default selected board
  useEffect(() => {
    if (selectedBoard === "") {
      setSelectedBoard(boards[0]?.boardName);
    }
  }, [selectedBoard, boards]);
  if (!mounted) return null;

  return (
    <main className="w-screen h-screen flex">
      <Sidebar
        boards={boards}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        setSelectedBoard={setSelectedBoard}
        selectedBoard={selectedBoard}
      />
      <div className="flex flex-grow flex-col">
        <Topbar
          selectedBoard={selectedBoard}
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
        {isSidebarVisible && (
          <MobileSidebarCover
            isSidebarVisible={isSidebarVisible}
            setIsSidebarVisible={setIsSidebarVisible}
          />
        )}
        <div className="size-full">{children}</div>
      </div>

      <ShowSidebarButton
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </main>
  );
};

export default HomeLayout;
