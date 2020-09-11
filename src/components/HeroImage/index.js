import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import MyPhoto from 'assets/images/me_black.jpg';

import useAnimationHook from './animationHook';
import { Background, Wrapper, Image } from './style';

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
        const image = data.images.childImageSharp.fluid;

        return (
          <Wrapper ref={textWrapper} data-testid="heroImage">
            <Image src={MyPhoto} fluid={image} />
            <Background />
          </Wrapper>
        );
      }}
    />
  );
};

export default HeroImage;
