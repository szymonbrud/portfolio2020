import React from 'react';

import './styles.css';

import GlobalStyleProvider from 'assets/styles/globalStyle';
import TopBarPhone from 'components/TopBarMobile';
import Background from 'components/Background';
import HeroTextPhone from 'components/HeroText';
import NavigationArrow from 'components/NavigationArrow';
import ScrollDownLineHero from 'components/ScrollDownLineHero';
import PageNumber from 'components/PageNumber';
import HeroImage from 'components/HeroImage';
import MenuDesktopButton from 'components/MenuDesktopButton';

const IndexPage = () => (
  <GlobalStyleProvider>
    <Background>
      <TopBarPhone />
      <HeroTextPhone />
      <NavigationArrow />
      <ScrollDownLineHero />
      <PageNumber />
      <HeroImage />
      <MenuDesktopButton />
    </Background>
  </GlobalStyleProvider>
);

export default IndexPage;
