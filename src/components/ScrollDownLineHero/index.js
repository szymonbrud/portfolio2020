import React from 'react';

import { Line, Wrapper, Text } from './style';
import useAnimationHook from './animationHook';

const ScrollDownLineHero = () => {
  const { wrapper } = useAnimationHook();
  return (
    <Wrapper ref={wrapper}>
      <Text>scroll down</Text>
      <Line />
    </Wrapper>
  );
};

export default ScrollDownLineHero;
