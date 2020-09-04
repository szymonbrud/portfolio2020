import styled from 'styled-components';

export const MainWrapper = styled.nav`
  padding: 28px 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

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
`;
