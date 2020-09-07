import React, { useRef, useEffect } from 'react';

import useChangePage from 'hooks/changePage';
import Arrow from '../../icons/arrow.svg';
import { Wrapper } from './style';
import animationEntry from './animationHook';

const NavigationArrow = () => {
  const { nextPage } = useChangePage();
  const wrapperRef = useRef(null);

  const { onMounseEnterAnimation, onMounseLeaveAnimation } = animationEntry(
    wrapperRef,
  );

  useEffect(() => {
    const [arrowTop, arrowBottom] = wrapperRef.current.children;

    const arrowTopBar = arrowTop.getElementById('bar');

    arrowTopBar.style.display = 'none';

    const arrowBottomBar = arrowBottom.getElementById('bar');

    arrowBottomBar.style.display = 'none';
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Arrow
        onClick={() => nextPage(false)}
        onMouseEnter={e => onMounseEnterAnimation(e)}
        onMouseLeave={e => onMounseLeaveAnimation(e)}
        style={{ cursor: 'pointer', padding: '20px', boxSizing: 'content-box' }}
      />
      <Arrow
        onClick={nextPage}
        onMouseEnter={e => onMounseEnterAnimation(e)}
        onMouseLeave={e => onMounseLeaveAnimation(e)}
        style={{
          transform: 'rotate(180deg)',
          marginTop: '-25px',
          cursor: 'pointer',
          padding: '20px',
          boxSizing: 'content-box',
        }}
      />
    </Wrapper>
  );
};

export default NavigationArrow;
