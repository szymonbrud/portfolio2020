import React from 'react';

import './styles.css';

import GlobalStyleProvider from 'assets/styles/globalStyle';
import TopBarPhone from 'components/TopBarPhone';
import Background from 'components/Background';
import HeroTextPhone from 'components/HeroTextPhone';
import NavigationArrow from 'components/NavigationArrow';
import ScrollDownLineHero from 'components/ScrollDownLineHero';
import PageNumber from 'components/PageNumber';

const IndexPage = () => (
  <GlobalStyleProvider>
    <Background>
      <TopBarPhone />
      <HeroTextPhone />
      <NavigationArrow />
      <ScrollDownLineHero />
      <PageNumber />
    </Background>
  </GlobalStyleProvider>
);

export default IndexPage;
