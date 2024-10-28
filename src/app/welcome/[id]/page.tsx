'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { PacmanLoader } from 'react-spinners';

import Card from '@/components/Card';
import useGetDeliveryDetails from '@/hooks/useGetDeliveryDetails';

const DeliverySummaryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, deliveryDetails } = useGetDeliveryDetails(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <PacmanLoader size={27} color="#15803D" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="m-auto">
        <h2 className="font-semibold text-2xl text-green-700">
          Sorry, that didn&apos;t work
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-dvh">
      {deliveryDetails ? (
        <Card
          title={deliveryDetails.title}
          message={deliveryDetails.message}
          totalPrice={deliveryDetails.totalPrice}
          freeGift={deliveryDetails.freeGift}
        />
      ) : (
        <div className="flex justify-center items-center h-dvh">
          <PacmanLoader size={27} color="#15803D" />
        </div>
      )}
    </div>
  );
};

export default DeliverySummaryPage;
