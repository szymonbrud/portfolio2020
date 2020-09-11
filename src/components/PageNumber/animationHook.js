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
    const [, line] = textWrapper.current.children;

    const tl = gsap.timeline();

    gsap.to(line, { scaleX: 0 });

    tl.from(mainWrapper, 0.3, {
      delay: 2.1,
      y: 200,
      ease: 'back.out(1.7)',
    }).fromTo(
      line,
      {
        x: -100,
      },
      {
        scaleX: 1,
        x: 0,
        duration: 0.7,
      },
    );
  };

  const animationLeave = () => {
    const mainWrapper = textWrapper.current;
    const [, line] = textWrapper.current.children;

    const tl = gsap.timeline();

    tl.to(line, 0.4, { scaleX: 0, delay: 1.3, transformOrigin: 'left' }).to(
      mainWrapper,
      0.3,
      {
        y: 200,
        ease: 'back.out(1.7)',
      },
    );
  };

  useEffect(() => {
    runEntryOrLeaveAnimation(animationEntry, animationLeave);
  }, [pageStatus]);
  return {
    textWrapper,
  };
};

export default useAnimationHook;
