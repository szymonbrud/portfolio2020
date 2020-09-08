import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes, { element } from 'prop-types';

import BackgroundImage from 'gatsby-background-image';

const BackgroundComp = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        images: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.images.childImageSharp.fluid;

      return (
        <BackgroundImage
          Tag="section"
          className="Background"
          fluid={imageData}
          backgroundColor="#000"
        >
          <Background>{children}</Background>
        </BackgroundImage>
      );
    }}
  />
);

BackgroundComp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(element), element])
    .isRequired,
};

export default BackgroundComp;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
