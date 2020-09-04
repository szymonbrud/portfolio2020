import { useEffect, useState } from 'react';

import sizes from 'assets/deviceSizes';

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState(null);

  const getWindowSize = () => {
    const width = window.innerWidth;
    const sizeKeys = Object.keys(sizes);

    for (let i = sizeKeys.length - 1; i >= 0; i -= 1) {
      if (width >= sizes[sizeKeys[i]]) {
        setWindowSize(sizeKeys[i]);
        break;
      }
    }
  };

  useEffect(() => {
    getWindowSize();
  }, []);

  return {
    windowSize,
  };
};

export default useGetWindowSize;
