import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus } = useContext(StateOfPageContext);

  const iconsWrapper = useRef(null);

  const animationEntry = () => {
    const iconsWrapperElement = iconsWrapper.current;

    gsap.from(iconsWrapperElement, {
      y: -100,
      duration: 0.4,
      ease: 'back.out(1.7)',
      delay: 3,
    });
  };

  const animationLeave = () => {
    const iconsWrapperElement = iconsWrapper.current;

    gsap.to(iconsWrapperElement, 0.4, {
      y: -100,
      ease: 'back.out(1.7)',
      delay: 1.2,
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
    iconsWrapper,
  };
};

export default useAnimationHook;
