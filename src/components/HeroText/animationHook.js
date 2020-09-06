import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
  const textWrapper = useRef(null);

  const animationEntry = () => {
    const [helloText, nameText, descText] = textWrapper.current.children;

    const tl = gsap.timeline();

    tl.from(helloText, { x: '-100vw', duration: 0.3, delay: 0.5 })
      .from(nameText, { x: '-100vw', duration: 0.3 })
      .from(descText, { x: '-100vw', duration: 0.3 });
  };

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    textWrapper,
  };
};

export default useAnimationHook;
