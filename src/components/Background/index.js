import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes, { element } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import { Background } from './style';

const BackgroundComp = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        images: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.childImageSharp.fluid;

      return (
        <BackgroundImage
          Tag="section"
          className="Background"
          fluid={image}
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
