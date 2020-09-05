import styled from 'styled-components';
import media from 'assets/styles/media';

export const ButtonWrapper = styled.button`
  border: none;
  background: none;
  padding: 20px 10px;
  margin: 0;
  transform: translateX(-10px);

  ${media.smallDesktop`
    display: none;
  `}
`;

export const Bar = styled.div`
  width: 29px;
  height: 4px;
  position: relative;
  background: white;
  transform: translateY(-11px);

  ::before,
  ::after {
    content: '';
    background: white;
    height: 100%;
    position: absolute;
    left: 0;
  }

  ::before {
    bottom: -11px;
    width: 22px;
  }

  ::after {
    width: 26px;
    bottom: -22px;
  }
`;
