import styled from 'styled-components';
import media from 'assets/styles/media';

export const Line = styled.div`
  height: 150px;
  background: ${({ theme }) => theme.colors.yellow};
  width: 2px;
  transition: height 0.2s;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 18px;
  position: absolute;
  right: -62px;
  width: 100px;
  transform: rotate(270deg);
  top: 11px;
  transition: top 0.2s;
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 84px;

  ${media.tablet`
    left: 119px;
  `}

  ${media.smallDesktop`
    left: 90px;
  `}

  cursor: pointer;

  &:hover ${Line} {
    height: 170px;
    transition: height 0.2s;
  }

  &:hover ${Text} {
    top: 31px;
    transition: top 0.2s;
  }
`;
