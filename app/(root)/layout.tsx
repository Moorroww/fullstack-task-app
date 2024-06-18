// HomeLayout.tsx
"use client";

import ShowSidebarButton from "@/components/ShowSidebarButton";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<string>("");

  const boards: boardType[] = [
    { boardName: "Platform Launch", boardID: "1s78293xydn" },
    { boardName: "Marketing plan", boardID: "2xny3d927h" },
    { boardName: "Roadmap", boardID: "3xndm93d7y2" },
  ];
  const currentBoard: string = "Current Board";

  // Here basically I try to refresh theme value so components in Topbar and Sidebar will render properly
  useEffect(() => {
    setMounted(true);
    setTheme(theme == "dark" ? "dark" : "light");
  }, [setTheme]);

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
        <Topbar currentBoard={currentBoard} selectedBoard={selectedBoard} />

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
