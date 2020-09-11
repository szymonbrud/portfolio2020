import React from 'react';

import useChangePage from 'hooks/changePage';

import { Wrapper } from './style';
import animationEntry from './animationHook';
import Arrow from '../../icons/arrow.svg';

const NavigationArrow = () => {
  const { nextPage } = useChangePage();
  const { animations, wrapperRef } = animationEntry();

  const {
    animationEntryHoverArrow1,
    animationEntryHoverArrow2,
    animationLeaveHoverArrow1,
    animationLeaveHoverArrow2,
  } = animations;

  return (
    <Wrapper ref={wrapperRef}>
      <Arrow
        className={0}
        onClick={() => nextPage(false)}
        onMouseEnter={e => animationEntryHoverArrow1(e)}
        onMouseLeave={animationLeaveHoverArrow1}
        style={{ cursor: 'pointer', padding: '20px', boxSizing: 'content-box' }}
      />
      <Arrow
        className={1}
        onClick={nextPage}
        onMouseEnter={e => animationEntryHoverArrow2(e)}
        onMouseLeave={animationLeaveHoverArrow2}
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
