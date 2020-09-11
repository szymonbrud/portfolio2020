import styled from 'styled-components';
import media from 'assets/styles/media';
import Img from 'gatsby-image';

export const Wrapper = styled.div`
  position: absolute;
  left: 60%;
  top: 27vh;

  ${media.minimal`
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

export const Image = styled(Img)`
  position: relative;
  z-index: 3;
  height: 46vh;
  width: calc(46vh * 0.75);

  ${media.smallDesktop`
    height: 60vh;
    width: calc(60vh * 0.75);
  `}
`;

export const Background = styled.div`
  position: absolute;
  top: 16px;
  left: -25px;
  background: ${({ theme }) => theme.colors.yellow};
  height: 99%;
  width: 100%;
  z-index: 2;

  ${media.smallDesktop`
    top: 19px;
    left: -30px;
  `}
`;
