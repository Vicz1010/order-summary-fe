'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PacmanLoader } from 'react-spinners';

import useGetAllUserId from '@/hooks/useGetAllUserId';

const WelcomePage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { idIsLoading, idIsError, idError, userIds } = useGetAllUserId();

  useEffect(() => {
    if (!id && userIds.length > 0) {
      router.push(`/welcome/${userIds[0]}`);
    }
  }, [userIds, id]);

  if (idIsLoading) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <PacmanLoader size={27} color="#15803D" />
      </div>
    );
  }
  if (idIsError)
    return <div>Error: {idError?.message || 'An error occurred'}</div>;

  return <></>;
};

export default WelcomePage;
