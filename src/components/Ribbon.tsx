'use client';

import useScreenDimensions from '@/hooks/useScreenDimensions';
import React from 'react';

const Ribbon = () => {
  const screenDimensions = useScreenDimensions();

  return (
    <div
      className={`w-32 bg-pink-300 ${
        screenDimensions.width > 870 ? 'rotate-20' : '-rotate-15'
      }`}
    >
      <h2 className="font-semibold text-xl text-sangria tracking-tight p-1 text-center">
        FREE GIFT
      </h2>
    </div>
  );
};

export default Ribbon;
