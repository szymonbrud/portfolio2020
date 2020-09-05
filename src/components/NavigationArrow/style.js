import styled from 'styled-components';
import media from 'assets/styles/media';

export const Wrapper = styled.nav`
  position: absolute;
  left: 36px;
  bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    left: 71px;
    bottom: 50px;
  `}

  ${media.smallDesktop`
    left: 42px;
  `}
`;
