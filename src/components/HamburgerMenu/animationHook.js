import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const burger = useRef(null);

  const { pageStatus, runEntryOrLeaveAnimation } = useContext(
    StateOfPageContext,
  );

  const animationEntry = () => {
    const burgerElement = burger.current;

    gsap.from(burgerElement, 0.4, {
      y: -100,
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
    runEntryOrLeaveAnimation(animationEntry, animationLeave);
  }, [pageStatus]);

  return {
    burger,
  };
};

export default useAnimationHook;
