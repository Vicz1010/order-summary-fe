import { getAllUserId } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const useGetAllUserId = () => {
  const {
    isLoading: idIsLoading,
    isError: idIsError,
    data: userIds,
    error: idError,
  } = useQuery({
    queryKey: ['userIds'],
    queryFn: getAllUserId,
  });

  return {
    idIsLoading,
    idIsError,
    idError,
    userIds: userIds || [],
  };
};

export default useGetAllUserId;
