import React, { useRef, useEffect } from 'react';

import Arrow from '../../icons/arrow.svg';
import { Wrapper } from './style';
import animationEntry from './animationHook';

const NavigationArrow = () => {
  const wrapperRef = useRef(null);

  animationEntry(wrapperRef);

  useEffect(() => {
    const [arrowTop, arrowBottom] = wrapperRef.current.children;

    // const top = element.getElementById('top');
    const arrowTopBar = arrowTop.getElementById('bar');

    arrowTopBar.style.display = 'none';

    const arrowBottomBar = arrowBottom.getElementById('bar');

    arrowBottomBar.style.display = 'none';
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Arrow />
      <Arrow style={{ transform: 'rotate(180deg)', marginTop: '15px' }} />
    </Wrapper>
  );
};

export default NavigationArrow;
