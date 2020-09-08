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

import { StateOfPageContextProvider } from 'context/StateOfPageContext';

const IndexPage = () => (
  // const [isLoad, setIsLoad] = useState(false);

  // const isLoadedPage = () => {
  //   setTimeout(() => {
  //     if (window.isLoaded) {
  //       setIsLoad(true);
  //     } else {
  //       isLoadedPage();
  //     }
  //   }, 200);
  // };

  // useEffect(() => {
  //   isLoadedPage();
  // }, []);

  <GlobalStyleProvider>
    <StateOfPageContextProvider>
      <Background>
        <TopBarPhone />
        <HeroTextPhone />
        <NavigationArrow />
        <ScrollDownLineHero />
        <PageNumber />
        <HeroImage />
        <MenuDesktopButton />
      </Background>
    </StateOfPageContextProvider>
  </GlobalStyleProvider>
);

// if (isLoad) {

// }

// return <h1>ładowanko</h1>;
export default IndexPage;
