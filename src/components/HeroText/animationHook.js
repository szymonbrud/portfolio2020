import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimationHook = () => {
  const textWrapper = useRef(null);

  const animationEntry = () => {
    const [helloText, nameText, descText] = textWrapper.current.children;

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.from(helloText, {
      transformOrigin: 'left',
      clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
      duration: 0.5,
      delay: 0.5,
    })
      .from(nameText, {
        transformOrigin: 'left',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      })
      .from(descText, {
        transformOrigin: 'left',
        clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)',
        duration: 0.5,
      });

    tl2
      .to(helloText.children[0], {
        left: '100%',
        duration: 0.5,
        delay: 0.51,
      })
      .to(nameText.children[0], {
        left: '100%',
        duration: 0.5,
      })
      .to(descText.children[0], {
        left: '100%',
        duration: 0.5,
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
