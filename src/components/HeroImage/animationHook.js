import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
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

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
