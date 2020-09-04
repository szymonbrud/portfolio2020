import styled from 'styled-components';
import media from 'assets/styles/media';

export const HelloText = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 36px;
  margin: 0;
`;

export const NameText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 72px;
  margin: 31px 0 0;

  ${media.tablet`
    width: 350px;
  `}
`;

export const DescriptionText = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  font-size: 24px;
  margin: 0 0 0;
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
`;
