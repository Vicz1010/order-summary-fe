import { useEffect, useState } from 'react';

/**
 *
 * @returns values for display screen width and height
 */
const useScreenDimensions = () => {
  const isSSR = typeof window === 'undefined';
  const [dimensions, setDimensions] = useState({
    width: isSSR ? 12000 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions]);

  return dimensions;
};

export default useScreenDimensions;
