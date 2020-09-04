import React from 'react';

import { HelloText, TextWrapper, NameText, DescriptionText } from './style';

const HeroTextPhone = () => (
  <TextWrapper>
    <HelloText>Hello, </HelloText>
    <NameText>Szymon Brud</NameText>
    <DescriptionText>I am front end devloepr</DescriptionText>
  </TextWrapper>
);

export default HeroTextPhone;
