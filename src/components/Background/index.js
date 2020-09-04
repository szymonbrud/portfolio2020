import styled from 'styled-components';
import background from 'assets/images/background.png';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});

  position: relative;
  overflow: hidden;
`;

export default Background;
