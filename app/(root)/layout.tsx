"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useAuth from "@/hooks/useAuth";

import { QueryClient, QueryClientProvider } from "react-query";

import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import MobileSidebarCover from "@/components/MobileSidebarCover";
import ShowSidebarButton from "@/components/ShowSidebarButton";
import PopupWrapper from "@/components/PopupWrapper";

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
      <main className="flex h-[100dvh] w-[100dvw] overflow-hidden">
        <Sidebar />
        <div className="flex flex-grow flex-col">
          <Topbar />
          <MobileSidebarCover />
          <div className="size-full overflow-scroll">{children}</div>
        </div>
        <ShowSidebarButton />
        <PopupWrapper />
      </main>
    </QueryClientProvider>
  );
};

export default HomeLayout;
