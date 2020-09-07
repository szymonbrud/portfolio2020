import React from 'react';

import useChangePage from 'hooks/changePage';
import { Line, Wrapper, Text } from './style';
import useAnimationHook from './animationHook';

const ScrollDownLineHero = () => {
  const { nextPage } = useChangePage();
  const { wrapper } = useAnimationHook();

  return (
    <Wrapper ref={wrapper} onClick={nextPage}>
      <Text>scroll down</Text>
      <Line />
    </Wrapper>
  );
};

export default ScrollDownLineHero;
