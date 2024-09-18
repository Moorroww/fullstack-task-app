import { usePopupsStore } from "@/stores/store.popups";
import { cn } from "@/lib/utils";

const MobileSidebarCover = () => {
  const { isSidebarVisible, setIsSidebarVisible } = usePopupsStore();
  return (
    <div
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      className={cn(
        "fixed left-0 top-0 h-full w-screen bg-black/50 tablet:hidden",
        isSidebarVisible ? "flex" : "hidden",
      )}
    ></div>
  );
};

export default MobileSidebarCover;
