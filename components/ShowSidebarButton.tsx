import { usePopupsStore } from "@/stores/store.popups";
import { cn } from "@/lib/utils";

import Image from "next/image";

const ShowSidebarButton = () => {
  const { isSidebarVisible, setIsSidebarVisible } = usePopupsStore();
  return (
    <button
      className={cn(
        "absolute bottom-8 left-0 hidden rounded-r-full bg-kbPurpleMain p-5",
        !isSidebarVisible && "tablet:flex",
      )}
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
    >
      <Image src="/icons/icon-show-sidebar.svg" width={16} height={10} alt="" />
    </button>
  );
};

export default ShowSidebarButton;
