import React from 'react';

import './styles.css';

import GlobalStyleProvider from 'assets/styles/globalStyle';
import TopBarPhone from 'components/TopBarPhone';
import Background from 'components/Background';
import HeroTextPhone from 'components/HeroTextPhone';
import NavigationArrow from 'components/NavigationArrow';
import ScrollDownLineHero from 'components/ScrollDownLineHero';
import PageNumber from 'components/PageNumber';
import HeroImage from 'components/HeroImage';

import useGetWindowSize from 'hooks/useGetWindowSize';

const IndexPage = () => {
  const { windowSize } = useGetWindowSize();

  return (
    <GlobalStyleProvider>
      <Background>
        <TopBarPhone />
        <HeroTextPhone />
        <NavigationArrow />
        <ScrollDownLineHero />
        <PageNumber />
        {windowSize !== 'phone' && <HeroImage />}
      </Background>
    </GlobalStyleProvider>
  );
};

export default IndexPage;
