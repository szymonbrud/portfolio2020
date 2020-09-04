import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 60%;
  top: 27vh;
`;

export const Image = styled.img`
  position: relative;
  z-index: 3;
  height: 46vh;
`;

export const Background = styled.div`
  position: absolute;
  top: 16px;
  left: -25px;
  background: ${({ theme }) => theme.colors.yellow};
  height: 100%;
  width: 100%;
  z-index: 2;
`;
