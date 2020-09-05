import styled from 'styled-components';
import media from 'assets/styles/media';

export const MenuText = styled.nav`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontsWeight.light};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  color: white;
  position: absolute;
  top: 50vh;
  left: 23px;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;

  ${media.phone`
    display: none;
  `}

  ${media.smallDesktop`
    display: block;
  `}

  ::before {
    content: '';
    position: absolute;
    top: -12px;
    right: -17px;
    background: white;
    width: 2px;
    height: 48px;
  }
`;
