import { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';

import StateOfPageContext from 'context/StateOfPageContext';

const useAnimationHook = () => {
  const wrapperRef = useRef(null);

  const { pageStatus, runEntryOrLeaveAnimation } = useContext(
    StateOfPageContext,
  );

  const startedArrowPosition = () => {
    const [arrowTop, arrowBottom] = wrapperRef.current.children;

    const arrowTopBar = arrowTop.getElementById('bar');

    arrowTopBar.style.display = 'none';

    const arrowBottomBar = arrowBottom.getElementById('bar');

    arrowBottomBar.style.display = 'none';
  };

  const animationEntry = () => {
    gsap.from(wrapperRef.current, 0.5, {
      y: 200,
      delay: 3.4,
      ease: 'back.out(1.7)',
    });
  };

  const animationLeave = () => {
    gsap.to(wrapperRef.current, 0.5, {
      y: 200,
      ease: 'back.out(1.7)',
    });
  };

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  let isDefinedTimelineAnimation1 = false;
  let isDefinedTimelineAnimation2 = false;

  const animationEntryHoverArrow1 = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    if (!isDefinedTimelineAnimation1) {
      gsap.set(bar, { display: 'block', scaleY: 0 });
      tl.to(bar, { scaleY: 1 });
      isDefinedTimelineAnimation1 = true;
    }

    tl.play();
  };

  const animationEntryHoverArrow2 = e => {
    const element = e.currentTarget;
    const bar = element.getElementById('bar');

    if (!isDefinedTimelineAnimation2) {
      gsap.set(bar, { display: 'block', scaleY: 0 });
      tl2.to(bar, { scaleY: 1 });
      isDefinedTimelineAnimation2 = true;
    }

    tl2.play();
  };

  const animationLeaveHoverArrow1 = () => {
    tl.reverse();
  };

  const animationLeaveHoverArrow2 = () => {
    tl2.reverse();
  };

  const animations = {
    animationEntryHoverArrow1,
    animationEntryHoverArrow2,
    animationLeaveHoverArrow1,
    animationLeaveHoverArrow2,
  };

  useEffect(() => {
    runEntryOrLeaveAnimation(animationEntry, animationLeave);
  }, [pageStatus]);

  useEffect(() => {
    startedArrowPosition();
  });

  return {
    wrapperRef,
    animations,
  };
};

export default useAnimationHook;
