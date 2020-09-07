import React, { useContext } from 'react';

import StateOfPageContext from 'context/StateOfPageContext';

import { Line, Wrapper, Text } from './style';
import useAnimationHook from './animationHook';

const ScrollDownLineHero = () => {
  const { setPageStatus } = useContext(StateOfPageContext);

  const { wrapper } = useAnimationHook();
  return (
    <Wrapper ref={wrapper} onClick={() => setPageStatus('leave')}>
      <Text>scroll down</Text>
      <Line />
    </Wrapper>
  );
};

export default ScrollDownLineHero;
