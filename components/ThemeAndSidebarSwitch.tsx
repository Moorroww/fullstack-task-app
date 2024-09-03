import { useTheme } from "next-themes";
import { usePopupsStore } from "@/stores/store.popups";

import { Switch } from "./ui/switch";
import Image from "next/image";

const ThemeAndSidebarSwitch = () => {
  const { isSidebarVisible, setIsSidebarVisible } = usePopupsStore();
  const { setTheme, theme } = useTheme();

  return (
    <div className="mb-12 mt-4 tablet:mt-0">
      <div className="flex items-center gap-6 rounded-[6px] bg-background px-16 py-4">
        <Image
          src="/icons/icon-light-theme.svg"
          className="w-auto"
          width={20}
          height={15}
          alt=""
        />
        <Switch
          checked={theme == "dark"}
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
        <Image
          src="/icons/icon-dark-theme.svg"
          className="w-auto"
          width={20}
          height={15}
          alt=""
        />
      </div>

      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="hidden items-center gap-4 py-4 tablet:flex"
      >
        <Image
          src="/icons/icon-hide-sidebar.svg"
          width={18}
          height={16}
          alt=""
        />
        <span className="heading-m text-kbMediumGrey">Hide Sidebar</span>
      </button>
    </div>
  );
};

export default ThemeAndSidebarSwitch;
