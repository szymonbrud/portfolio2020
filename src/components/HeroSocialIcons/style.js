import styled from 'styled-components';
import media from 'assets/styles/media';

export const GitIcon = styled.img`
  width: 23px;
  height: 23px;
`;

export const LinkedinText = styled.p`
  color: white;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-size: 22px;
  margin: 0;
  margin-right: 17px;
`;

export const IconWrapper = styled.div`
  display: flex;

  ${media.smallDesktop`
    position: absolute;
    right: 10%;
    top: 53px;
  `}

  ${media.desktop`
    right: 14%;
    top: 66px;
  `}
`;
