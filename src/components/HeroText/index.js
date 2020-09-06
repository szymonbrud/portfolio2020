import React from 'react';

import { HelloText, TextWrapper, NameText, DescriptionText } from './style';
import useAnimationHook from './animationHook';

const HeroTextPhone = () => {
  const { textWrapper } = useAnimationHook();

  return (
    <TextWrapper ref={textWrapper}>
      <HelloText>Hello, </HelloText>
      <NameText>Szymon Brud</NameText>
      <DescriptionText>I am front end devloepr</DescriptionText>
    </TextWrapper>
  );
};

export default HeroTextPhone;
