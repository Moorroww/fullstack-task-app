import { useSidebar } from "@/context/sidebarContext";
import { cn } from "@/lib/utils";

import Image from "next/image";

const ShowSidebarButton = () => {
  const { isSidebarVisible, setIsSidebarVisible } = useSidebar();
  return (
    <button
      className={cn(
        "hidden  absolute p-5 rounded-r-full bg-kbPurpleMain bottom-8 left-0",
        !isSidebarVisible && "tablet:flex"
      )}
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
    >
      <Image src="/icons/icon-show-sidebar.svg" width={16} height={10} alt="" />
    </button>
  );
};

export default ShowSidebarButton;
