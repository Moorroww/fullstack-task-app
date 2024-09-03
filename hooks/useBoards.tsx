import { useQuery } from "react-query";
import { getUserBoards } from "@/actions/actions.boardsAndCols";

const useBoards = () => {
  const { data, isError, error, isLoading, refetch } = useQuery(
    "boards",
    async () => {
      return await getUserBoards();
    },
  );

  return { boards: data || [], isLoading, isError, error, refetch };
};

export default useBoards;
