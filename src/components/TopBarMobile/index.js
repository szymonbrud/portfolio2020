import React from 'react';

import HamburgerMenu from 'components/HamburgerMenu';
import HeroSocialIcons from 'components/HeroSocialIcons';

import { MainWrapper } from './style';

const TopBarPhone = () => (
  <MainWrapper>
    <HamburgerMenu />
    <HeroSocialIcons />
  </MainWrapper>
);

export default TopBarPhone;
