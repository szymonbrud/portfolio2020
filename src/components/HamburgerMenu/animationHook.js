import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus } = useContext(StateOfPageContext);

  const burger = useRef(null);

  const animationEntry = () => {
    const burgerElement = burger.current;

    gsap.from(burgerElement, {
      y: -100,
      duration: 0.4,
      ease: 'back.out(1.7)',
      delay: 3,
    });
  };

  const animationLeave = () => {
    const burgerElement = burger.current;

    gsap.to(burgerElement, 0.4, {
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
    burger,
  };
};

export default useAnimationHook;
