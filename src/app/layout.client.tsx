'use client';

import TanstackProvider from '@/components/providers/TanstackProvider';
import React from 'react';

const LayoutClient = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <TanstackProvider>{children}</TanstackProvider>
    </>
  );
};

export default LayoutClient;
