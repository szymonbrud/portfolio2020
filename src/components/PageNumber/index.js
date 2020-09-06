import React from 'react';

import { Wrapper, BottomLine, Number } from './style';
import animationHook from './animationHook';

const PageNumber = () => {
  const { textWrapper } = animationHook();

  return (
    <Wrapper ref={textWrapper}>
      <Number>01/04</Number>
      <BottomLine />
    </Wrapper>
  );
};

export default PageNumber;
