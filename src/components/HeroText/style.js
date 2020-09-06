import styled from 'styled-components';
import media from 'assets/styles/media';

export const HelloText = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 36px;
  margin: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  position: relative;
`;

export const TextBackground = styled.span`
  position: absolute;
  z-index: 1000;
  width: 3px;
  height: 100%;
  background: white;
  left: 0;
  top: 0;
`;

export const NameText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 72px;
  margin: 31px 0 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  ${media.tablet`
    width: 350px;
  `};

  ${media.smallDesktop`
    width: 700px;
  `};
`;

export const DescriptionText = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 24px;
  margin: 0 0 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const TextWrapper = styled.div`
  margin: -5vh 43px 0;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    margin: 5vh 43px 0;
  `}

  ${media.smallDesktop`
    margin: 5vh 0 0 12%;
  `}

  ${media.desktop`
    margin: 5vh 0 0 16%;
  `}
`;
