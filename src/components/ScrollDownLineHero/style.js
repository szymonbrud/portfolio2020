import styled from 'styled-components';
import media from 'assets/styles/media';

export const Line = styled.div`
  height: 150px;
  background: ${({ theme }) => theme.colors.yellow};
  width: 2px;
  position: absolute;
  bottom: 0;
  left: 84px;

  ::before {
    content: 'scroll down';
    position: absolute;
    color: ${({ theme }) => theme.colors.yellow};
    right: -62px;
    top: 29px;
    width: 100px;
    transform: rotate(270deg);
    font-size: 18px;
  }

  ${media.tablet`
    left: 119px;
    
  `}
`;
