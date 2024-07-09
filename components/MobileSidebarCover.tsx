import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebarContext";

const MobileSidebarCover = () => {
  const { isSidebarVisible, setIsSidebarVisible } = useSidebar();
  return (
    <div
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      className={cn(
        "tablet:hidden absolute top-[58.5px] left-0 w-screen h-full bg-black/50",
        isSidebarVisible ? "flex" : "hidden"
      )}
    ></div>
  );
};

export default MobileSidebarCover;
