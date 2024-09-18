import useBoards from "@/hooks/useBoards";

const SidebarBoardsCounter = () => {
  const { boards } = useBoards();
  return (
    <div className="mt-4 pb-5 pl-8 tracking-[2.4px] text-kbMediumGrey tablet:mt-0">
      ALL BOARDS ({boards.length})
    </div>
  );
};

export default SidebarBoardsCounter;
