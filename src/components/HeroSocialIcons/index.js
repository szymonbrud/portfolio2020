import React from 'react';

import githubLogo from 'assets/images/githubLogo.png';

import { GitIcon, IconWrapper, LinkedinText } from './style';
import useAnimationHook from './animationHook';

const HeroSocialIcons = () => {
  const { iconsWrapper } = useAnimationHook();

  return (
    <IconWrapper ref={iconsWrapper}>
      <LinkedinText>in</LinkedinText>
      <GitIcon src={githubLogo} />
    </IconWrapper>
  );
};

export default HeroSocialIcons;
