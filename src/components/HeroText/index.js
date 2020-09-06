import React from 'react';

import {
  HelloText,
  TextWrapper,
  NameText,
  DescriptionText,
  TextBackground,
} from './style';
import useAnimationHook from './animationHook';

const HeroTextPhone = () => {
  const { textWrapper } = useAnimationHook();

  return (
    <TextWrapper ref={textWrapper}>
      <HelloText>
        Hello,
        <TextBackground />
      </HelloText>
      <NameText>
        Szymon Brud
        <TextBackground />
      </NameText>
      <DescriptionText>
        I am front end devloepr
        <TextBackground />
      </DescriptionText>
    </TextWrapper>
  );
};

export default HeroTextPhone;
