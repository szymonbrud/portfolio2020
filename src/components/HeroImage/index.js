import React from 'react';

import MyPhoto from 'assets/images/me_black.jpg';

import { Image, Background, Wrapper } from './style';

const HeroImage = () => (
  <Wrapper>
    <Image src={MyPhoto} />
    <Background />
  </Wrapper>
);

export default HeroImage;
