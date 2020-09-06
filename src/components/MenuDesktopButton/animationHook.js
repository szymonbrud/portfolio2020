import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
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

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
