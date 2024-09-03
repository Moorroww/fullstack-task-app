"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useAuth from "@/hooks/useAuth";

import { SidebarProvider } from "@/context/sidebarContext";
import { QueryClient, QueryClientProvider } from "react-query";

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
  const queryClient = new QueryClient();

  useEffect(() => {
    setMounted(true);
    setTheme(theme == "dark" ? "dark" : "light");
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <main className="flex h-screen w-screen">
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
    </QueryClientProvider>
  );
};

export default HomeLayout;
