import React from 'react';

import MyPhoto from 'assets/images/me_black.jpg';

import { Image, Background, Wrapper } from './style';
import useAnimationHook from './animationHook';

const HeroImage = () => {
  const { textWrapper } = useAnimationHook();
  return (
    <Wrapper ref={textWrapper}>
      <Image src={MyPhoto} />
      <Background />
    </Wrapper>
  );
};

export default HeroImage;
