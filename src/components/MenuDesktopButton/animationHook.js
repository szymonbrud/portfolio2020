import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus, runEntryOrLeaveAnimation } = useContext(
    StateOfPageContext,
  );

  const textWrapper = useRef(null);

  const animationEntry = () => {
    const mainWrapper = textWrapper.current;

    gsap.from(mainWrapper, 0.4, {
      x: -400,
      delay: 2,
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
    runEntryOrLeaveAnimation(animationEntry, animationLeave);
  }, [pageStatus]);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
