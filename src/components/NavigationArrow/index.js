import React, { useRef, useEffect } from 'react';

import useChangePage from 'hooks/changePage';
import Arrow from '../../icons/arrow.svg';
import { Wrapper } from './style';
import animationEntry from './animationHook';

const NavigationArrow = () => {
  const { nextPage } = useChangePage();
  const wrapperRef = useRef(null);

  const { animations } = animationEntry(wrapperRef);

  const {
    animationEnter1,
    animationEnter2,
    animationLeave1,
    animationLeave2,
  } = animations;

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
        className={0}
        onClick={() => nextPage(false)}
        onMouseEnter={e => animationEnter1(e)}
        onMouseLeave={animationLeave1}
        style={{ cursor: 'pointer', padding: '20px', boxSizing: 'content-box' }}
      />
      <Arrow
        className={1}
        onClick={nextPage}
        onMouseEnter={e => animationEnter2(e)}
        onMouseLeave={animationLeave2}
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
