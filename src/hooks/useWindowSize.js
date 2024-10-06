import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'helpers';

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const debounceResize = debounce(handleResize, 200);

  useEffect(() => {
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [debounceResize]);

  return windowWidth;
};
