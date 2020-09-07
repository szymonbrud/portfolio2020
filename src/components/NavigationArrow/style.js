import styled from 'styled-components';
import media from 'assets/styles/media';

export const Wrapper = styled.nav`
  position: absolute;
  left: 16px;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    left: 51px;
    bottom: 30px;
  `}

  ${media.smallDesktop`
    left: 22px;
  `}
`;
