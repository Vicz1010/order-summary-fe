import { getDeliveryDetails } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const useGetDeliveryDetails = (id: string) => {
  const {
    isLoading,
    isError,
    data: deliveryDetails,
    error,
  } = useQuery({
    queryKey: ['deliveryDetails', id],
    queryFn: () => getDeliveryDetails(id),
  });

  return { isLoading, isError, deliveryDetails, error };
};

export default useGetDeliveryDetails;
