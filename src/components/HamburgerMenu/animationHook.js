import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
  const burger = useRef(null);

  const animationEntry = () => {
    const burgerElement = burger.current;

    gsap.from(burgerElement, {
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
    burger,
  };
};

export default useAnimationHook;
