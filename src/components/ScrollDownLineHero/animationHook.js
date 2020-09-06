import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

const useAnimationHook = () => {
  const wrapper = useRef(null);

  const animationEntry = () => {
    const [text, line] = wrapper.current.children;

    gsap.set(line, { scaleY: 0, transformOrigin: 'top' });

    const tl = gsap.timeline();

    tl.from(text, {
      y: 300,
      duration: 0.5,
      ease: 'back.out(1.7)',
      delay: 3.4,
    }).to(line, {
      duration: 1,
      scaleY: 1,
    });
  };

  useEffect(() => {
    animationEntry();
  }, []);

  return {
    wrapper,
  };
};

export default useAnimationHook;

// gsap.set chyba ustawia na początku coś
