import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import media from 'assets/styles/media';

import MyPhoto from 'assets/images/me_black.jpg';

import { Background, Wrapper } from './style';
import useAnimationHook from './animationHook';

const Image = styled(Img)`
  position: relative;
  z-index: 3;
  height: 46vh;
  width: calc(46vh * 0.75);

  ${media.smallDesktop`
    height: 60vh;
    width: calc(60vh * 0.75);
  `}
`;

const HeroImage = () => {
  const { textWrapper } = useAnimationHook();

  return (
    <StaticQuery
      query={graphql`
        query {
          images: file(relativePath: { eq: "me_black.jpg" }) {
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
          <Wrapper ref={textWrapper}>
            <Image src={MyPhoto} fluid={imageData} />
            <Background />
          </Wrapper>
        );
      }}
    />
  );
};

export default HeroImage;
