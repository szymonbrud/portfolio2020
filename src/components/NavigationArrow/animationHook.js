import { useEffect, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = wrapperRef => {
  const { pageStatus } = useContext(StateOfPageContext);

  const animationEntry = () => {
    gsap.from(wrapperRef.current, {
      y: 200,
      duration: 0.5,
      delay: 3.4,
      ease: 'back.out(1.7)',
    });
  };

  const animationLeave = () => {
    gsap.to(wrapperRef.current, {
      y: 200,
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
  };

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  let isFirstDefined = false;
  const isSecoundDefined = false;

  const animationEnter1 = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    if (!isFirstDefined) {
      gsap.set(bar, { display: 'block', scaleY: 0 });
      tl.to(bar, { scaleY: 1 });
      isFirstDefined = true;
    }

    tl.play();
  };

  const animationEnter2 = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    if (!isSecoundDefined) {
      gsap.set(bar, { display: 'block', scaleY: 0 });
      tl2.to(bar, { scaleY: 1 });
      isFirstDefined = true;
    }

    tl2.play();
  };

  const animationLeave1 = () => {
    tl.reverse();
  };

  const animationLeave2 = () => {
    tl2.reverse();
  };

  const animations = {
    animationEnter1,
    animationEnter2,
    animationLeave1,
    animationLeave2,
  };

  useEffect(() => {
    if (pageStatus === 'entered') {
      animationEntry();
    } else {
      animationLeave();
    }
  }, [pageStatus]);

  return {
    animations,
  };
};

export default useAnimationHook;
