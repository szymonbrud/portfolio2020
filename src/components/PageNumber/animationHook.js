import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
  const textWrapper = useRef(null);

  const animationEntry = () => {
    const mainWrapper = textWrapper.current;
    const [, line] = textWrapper.current.children;

    const tl = gsap.timeline();

    gsap.to(line, { scaleX: 0 });

    tl.from(mainWrapper, {
      delay: 2.1,
      duration: 0.3,
      y: 100,
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

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
