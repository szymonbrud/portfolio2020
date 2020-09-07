import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus } = useContext(StateOfPageContext);

  const textWrapper = useRef(null);

  const animationEntry = () => {
    const mainWrapper = textWrapper.current;

    gsap.from(mainWrapper, {
      x: -400,
      delay: 2,
      duration: 0.4,
      ease: 'back.out(1.7)',
    });
  };

  const animationLeave = () => {
    const mainWrapper = textWrapper.current;

    gsap.to(mainWrapper, 0.4, {
      x: -400,
      ease: 'back.out(1.7)',
    });
  };

  useEffect(() => {
    if (pageStatus === 'entered') {
      animationEntry();
    } else {
      animationLeave();
    }
  }, [pageStatus]);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
