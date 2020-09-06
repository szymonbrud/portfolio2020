import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
  const iconsWrapper = useRef(null);

  const animationEntry = () => {
    const iconsWrapperElement = iconsWrapper.current;

    gsap.from(iconsWrapperElement, {
      y: -100,
      duration: 0.4,
      ease: 'back.out(1.7)',
      delay: 1.7,
    });
  };

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    iconsWrapper,
  };
};

export default useAnimationHook;
