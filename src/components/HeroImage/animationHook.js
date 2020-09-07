import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const { pageStatus } = useContext(StateOfPageContext);

  const textWrapper = useRef(null);

  const animationEntry = () => {
    const mainWrapper = textWrapper.current;
    const [, background] = textWrapper.current.children;

    const tl = gsap.timeline();

    tl.from(mainWrapper, {
      opacity: 0,
      duration: 0.5,
      delay: 2,
    }).from(background, { left: 0, top: 0, duration: 0.5 });
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
