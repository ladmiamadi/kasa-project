import React from 'react';
import styles from './Apartment.module.scss';
import Tag from '../Tag/Tag.jsx';
import Rating from '../Raiting/Rating.jsx';
import Host from '../Host/Host.jsx';
import PropTypes from 'prop-types';

const Apartment = ({ title, location, rating, host, tags }) => {
     return (
          <div className={styles.details}>
               <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.location}>{location}</p>
                    <div className={styles.tags}>
                         {tags.map((tag, index) => (
                              <Tag tag={tag} key={tag + index} />
                         ))}
                    </div>
               </div>
               <div className={styles.hostRating}>
                    <Host name={host.name} picture={host.picture} />
                    <Rating rating={rating} />
               </div>
          </div>
     );
};

Apartment.propTypes = {
     title: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
     rating: PropTypes.string.isRequired,
     host: PropTypes.object.isRequired,
     tags: PropTypes.array.isRequired,
};

export default Apartment;
