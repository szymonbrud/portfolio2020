import styled from 'styled-components';
import media from 'assets/styles/media';

export const MenuText = styled.nav`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontsWeight.light};
  font-family: ${({ theme }) => theme.fontsFamily.robotoSlab};
  color: white;
  position: absolute;
  top: 50vh;
  left: 7px;
  transform: translateY(-50%);
  margin: 0;
  padding: 15px 30px;
  user-select: none;

  ${media.minimal`
    display: none;
  `}

  ${media.smallDesktop`
    display: block;
  `}

  ::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 0px;
    background: white;
    width: 2px;
    height: 48px;
    transition: transform 0.2s;
  }

  :hover {
    cursor: pointer;

    ::before {
      transform: translateX(15px);
      transition: transform 0.2s;
    }
  }
`;
