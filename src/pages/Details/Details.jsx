import React, { useEffect, useState } from 'react';
import styles from './Details.module.scss';
import { useNavigate, useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch.js';
import Loader from '../../components/Loader/Loader.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Apartment from '../../components/Apartment/Apartment.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';

const Details = () => {
     const navigate = useNavigate();
     const { id } = useParams();
     const [apartment, setApartment] = useState(null);

     const {
          data: apartments,
          isLoading,
          error,
     } = useFetch('../../src/data/logements.json');

     useEffect(() => {
          if (apartments && Array.isArray(apartments)) {
               const foundApartment = apartments.find((item) => item.id === id);
               if (!foundApartment) {
                    navigate('/error');
               } else {
                    setApartment(foundApartment);
               }
          }
     }, [apartments, id, navigate]);

     if (error) {
          return <span>Il y a un problème!</span>;
     }

     if (isLoading) {
          return <Loader />;
     }

     const equipments = apartment?.equipments ? (
          <ul>
               {apartment.equipments.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
               ))}
          </ul>
     ) : null;

     return (
          apartment && (
               <div className={styles.details}>
                    <Slideshow
                         slides={apartment.pictures}
                         title={apartment.title}
                    />
                    <Apartment
                         title={apartment.title}
                         location={apartment.location}
                         host={apartment.host}
                         tags={apartment.tags}
                         rating={apartment.rating}
                    />
                    <div className={styles.collapse}>
                         <Collapse
                              title="Description"
                              content={<p>{apartment.description}</p>}
                         />
                         <Collapse title="Équipements" content={equipments} />
                    </div>
               </div>
          )
     );
};

export default Details;
