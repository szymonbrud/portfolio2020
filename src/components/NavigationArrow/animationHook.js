import { useEffect, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = wrapperRef => {
  const { pageStatus } = useContext(StateOfPageContext);

  const animationEntry = () => {
    gsap.from(wrapperRef.current, {
      y: 200,
      duration: 0.5,
      delay: 3.4,
      ease: 'back.out(1.7)',
    });
  };

  const animationLeave = () => {
    gsap.to(wrapperRef.current, {
      y: 200,
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
  };

  const onMounseEnterAnimation = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    gsap.set(bar, { display: 'block' });
    gsap.fromTo(bar, { scaleY: 0 }, { duration: 0.5, scaleY: 1 });
  };

  const onMounseLeaveAnimation = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    gsap.to(bar, { scaleY: 0, duration: 0.5 });
    gsap.set(bar, { display: 'none', delay: 0.5 });
  };

  useEffect(() => {
    if (pageStatus === 'entered') {
      animationEntry();
    } else {
      animationLeave();
    }
  }, [pageStatus]);

  return {
    onMounseEnterAnimation,
    onMounseLeaveAnimation,
  };
};

export default useAnimationHook;
