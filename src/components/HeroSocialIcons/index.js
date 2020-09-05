import React from 'react';

import githubLogo from 'assets/images/githubLogo.png';

import { GitIcon, IconWrapper, LinkedinText } from './style';

const HeroSocialIcons = () => (
  <IconWrapper>
    <LinkedinText>in</LinkedinText>
    <GitIcon src={githubLogo} />
  </IconWrapper>
);

export default HeroSocialIcons;
