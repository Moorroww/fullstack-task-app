import { useTheme } from "next-themes";

import Image from "next/image";
import { Switch } from "./ui/switch";

const ThemeAndSidebarSwitch = ({
  isSidebarVisible,
  setIsSidebarVisible,
}: {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="mb-12 mt-4 tablet:mt-0">
      <div className="px-16 py-4 flex items-center gap-6 bg-background rounded-[6px]">
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
        className="gap-4 py-4 items-center hidden tablet:flex"
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
