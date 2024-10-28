import { DeliveryDetails } from '@/types';
import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/comms';

export const getAllUserId = async (): Promise<string[]> => {
  const data = await axios
    .get(`${baseURL}/user-ids`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(`Error in getting User IDs - ${err}`);
    });

  return data;
};

export const getDeliveryDetails = async (
  id: string
): Promise<DeliveryDetails> => {
  const data = await axios
    .get(`${baseURL}/your-next-delivery/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(`Error in getting Delivery details - ${err}`);
    });

  return data;
};
