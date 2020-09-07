import React from 'react';

import githubLogo from 'assets/images/githubLogo.png';

import { GitIcon, IconWrapper, LinkedinText } from './style';
import useAnimationHook from './animationHook';

const HeroSocialIcons = () => {
  const { iconsWrapper } = useAnimationHook();

  return (
    <IconWrapper ref={iconsWrapper}>
      <a
        style={{ textDecoration: 'none' }}
        href="https://www.linkedin.com/in/szymon-brud-119253189/"
        target="blank"
      >
        <LinkedinText>in</LinkedinText>
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href="https://github.com/szymonqqaz"
        target="blank"
      >
        <GitIcon src={githubLogo} />
      </a>
    </IconWrapper>
  );
};

export default HeroSocialIcons;
