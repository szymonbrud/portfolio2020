import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';

import MyPhoto from 'assets/images/me_black.jpg';

import { Image, Background, Wrapper } from './style';
import useAnimationHook from './animationHook';

const HeroImage = () => {
  const { textWrapper } = useAnimationHook();

  return (
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
      render={() => (
        // const imageData = data.images.childImageSharp.fluid;

        <Wrapper ref={textWrapper}>
          <Image src={MyPhoto} />
          <Background />
        </Wrapper>
      )}
    />
  );
};

export default HeroImage;
