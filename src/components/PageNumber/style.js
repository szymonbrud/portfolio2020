import styled from 'styled-components';
import media from 'assets/styles/media';

export const Wrapper = styled.div`
  position: absolute;
  right: 35px;
  bottom: 44px;

  ${media.tablet`
    left: 200px;
    bottom: 70px;
  `}

  ${media.smallDesktop`
    left: 12%;
  `}
`;

export const BottomLine = styled.div`
  width: 172px;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray};
`;

export const Number = styled.p`
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  color: ${({ theme }) => theme.colors.white70};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  margin: 0 0 7px;
  font-size: 24px;
`;
