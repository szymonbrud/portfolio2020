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
    const [, background] = textWrapper.current.children;

    const tl = gsap.timeline();

    tl.from(mainWrapper, 0.5, {
      opacity: 0,
      delay: 2,
    }).from(background, 0.5, { left: 0, top: 0 });
  };

  const animationLeave = () => {
    const mainWrapper = textWrapper.current;
    const [, background] = textWrapper.current.children;

    const tl = gsap.timeline();

    tl.to(background, 0.5, { left: 0, top: 0, delay: 2 }).to(mainWrapper, 0.3, {
      opacity: 0,
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
