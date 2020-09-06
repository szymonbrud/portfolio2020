import styled from 'styled-components';
import media from 'assets/styles/media';

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
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 18px;
  position: absolute;
  right: -62px;
  width: 100px;
  transform: rotate(270deg);
  top: 11px;
`;

export const Line = styled.div`
  height: 150px;
  background: ${({ theme }) => theme.colors.yellow};
  width: 2px;
`;
