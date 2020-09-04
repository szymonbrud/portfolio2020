import React, { useRef, useEffect } from 'react';

import Logo from '../../icons/arrow.svg';
import { Wrapper } from './style';

const NavigationArrow = () => {
  const wrapperRef = useRef(null);

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
      <Logo />
      <Logo style={{ transform: 'rotate(180deg)', marginTop: '15px' }} />
    </Wrapper>
  );
};

export default NavigationArrow;
