import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import homeBanner from '../../assets/images/bannerHome.png';

const Home = () => {
     return (
          <>
               <Banner
                    bannerImage={homeBanner}
                    title="Chez vous, partout et ailleurs"
               />
               <Cards />
          </>
     );
};

export default Home;
