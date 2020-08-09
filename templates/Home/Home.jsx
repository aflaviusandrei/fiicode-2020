import React from 'react';
import { BeigeContainer, CodePattern, DesignLines } from 'components';
import HomeHeader from './components/HomeHeader/HomeHeader';
import HomeProjectDescription from './components/HomeProjectDescription/HomeProjectDescription';
import AlgArrowImg from 'assets/png/AlgoritmicAarrow.png';
import GamedevArrowImg from 'assets/png/GamedevArrow.png';
import WebArrowImg from 'assets/png/WebArrow.png';
import HomeAbout from './components/HomeAbout/HomeAbout';
import HomeNewsFeed from './components/HomeNewsFeed/HomeNewsFeed';
import HomeBlueSection from './components/HomeBlueSection/HomeBlueSection';

const blueSectionCategories = [
  {
    text: 'WebDev',
    image: WebArrowImg,
  },
  {
    text: 'GamedevArrowImg',
    image: GamedevArrowImg,
  },
  {
    text: 'Algo',
    image: AlgArrowImg,
  },
];

const Home = () => (
  <div>
    <BeigeContainer>
      <HomeHeader />
      <HomeProjectDescription />
    </BeigeContainer>

    <HomeBlueSection categories={blueSectionCategories} />

    <CodePattern />

    <HomeAbout />

    <DesignLines />

    <HomeNewsFeed />
  </div>
);

export default Home;
