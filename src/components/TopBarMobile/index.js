import React from 'react';

import HamburgerMenu from 'components/HamburgerMenu';

import githubLogo from 'assets/images/githubLogo.png';

import { MainWrapper, GitIcon, LinkedinText, IconWrapper } from './style';

const TopBarPhone = () => (
  <MainWrapper>
    <HamburgerMenu />
    <IconWrapper>
      <LinkedinText>in</LinkedinText>
      <GitIcon src={githubLogo} />
    </IconWrapper>
  </MainWrapper>
);

export default TopBarPhone;
