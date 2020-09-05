import styled from 'styled-components';
import media from 'assets/styles/media';

export const Wrapper = styled.div`
  position: absolute;
  left: 60%;
  top: 27vh;

  ${media.phone`
    display: none;
  `}

  ${media.tablet`
    display: block;
  `}

  ${media.smallDesktop`
    left: unset;
    right: 10%;
    top: 20vh;
  `}

  ${media.desktop`
    right: 14%;
  `}
`;

export const Image = styled.img`
  position: relative;
  z-index: 3;
  height: 46vh;

  ${media.smallDesktop`
    height: 60vh;
  `}
`;

export const Background = styled.div`
  position: absolute;
  top: 16px;
  left: -25px;
  background: ${({ theme }) => theme.colors.yellow};
  height: 100%;
  width: 100%;
  z-index: 2;

  ${media.smallDesktop`
    top: 19px;
    left: -30px;
  `}
`;
