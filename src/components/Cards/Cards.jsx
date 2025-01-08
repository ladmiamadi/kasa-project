import React from 'react';
import styles from './Cards.module.scss';
import Card from '../Card/Card.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import Loader from '../Loader/Loader.jsx';

const Cards = () => {
     const {
          data: apartments,
          isLoading,
          error,
     } = useFetch('src/data/logements.json');

     if (error) {
          return <span>Il y a un problème!</span>;
     }

     if (isLoading) {
          return (
               <>
                    <Loader />
               </>
          );
     }

     return (
          <div className={styles.container}>
               {Array.from(apartments).map((apartment) => (
                    <Card apartment={apartment} key={apartment.id} />
               ))}
          </div>
     );
};

export default Cards;
