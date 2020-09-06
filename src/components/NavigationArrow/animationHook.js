import { useEffect } from 'react';
import gsap from 'gsap';

const useAnimationHook = wrapperRef => {
  const animationEntry = () => {
    gsap.from(wrapperRef.current, {
      y: 200,
      duration: 0.5,
      delay: 3.4,
      ease: 'back.out(1.7)',
    });
  };

  useEffect(() => {
    animationEntry();
  }, []);
};

export default useAnimationHook;
