import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import StateOfPageContext from 'context/StateOfPageContext';

gsap.registerPlugin(CSSRulePlugin);

const useAnimationHook = () => {
  const { pageStatus } = useContext(StateOfPageContext);
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

  const animationLeave = () => {
    const [text, line] = wrapper.current.children;

    const tl = gsap.timeline();

    tl.to(line, 0.7, { scaleY: 0 }).to(text, 0.5, { y: 300 });
  };

  useEffect(() => {
    if (pageStatus === 'entered') {
      animationEntry();
    } else {
      animationLeave();
    }
  }, [pageStatus]);

  return {
    wrapper,
  };
};

export default useAnimationHook;

// gsap.set chyba ustawia na początku coś
