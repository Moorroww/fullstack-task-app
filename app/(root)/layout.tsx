"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useAuth from "@/hooks/useAuth";

import { SidebarProvider } from "@/context/sidebarContext";

import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import MobileSidebarCover from "@/components/MobileSidebarCover";
import ShowSidebarButton from "@/components/ShowSidebarButton";
import CreateBoardPopup from "@/components/CreateBoardPopup";
import DeleteAccountPopup from "@/components/DeleteAccountPopup";
import AddColumnPopup from "@/components/AddColumnPopup";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(theme == "dark" ? "dark" : "light");
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <SidebarProvider>
      <main className="w-screen h-screen flex">
        <Sidebar />
        <div className="flex flex-grow flex-col">
          <Topbar />
          <MobileSidebarCover />
          <div className="size-full">{children}</div>
        </div>
        <ShowSidebarButton />
        <CreateBoardPopup />
        <DeleteAccountPopup />
        <AddColumnPopup />
      </main>
    </SidebarProvider>
  );
};

export default HomeLayout;
