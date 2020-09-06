import React from 'react';

import { ButtonWrapper, Bar } from './style';
import useAnimationHook from './animationHook';

const HamburgerMenu = () => {
  const { burger } = useAnimationHook();

  return (
    <ButtonWrapper ref={burger}>
      <Bar />
    </ButtonWrapper>
  );
};

export default HamburgerMenu;
