import { useState, useEffect, useCallback } from "react";
import { getUserBoards } from "@/actions/actions.boardsAndCols";

const useBoards = () => {
  const [boards, setBoards] = useState<boardType[]>([]);

  const fetchBoards = useCallback(async () => {
    const boards = await getUserBoards();
    boards && setBoards(boards);
  }, []);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return { boards, fetchBoards };
};

export default useBoards;
