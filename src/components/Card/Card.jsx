import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Card = ({ apartment }) => {
     return (
          <Link to={`/apartment/${apartment.id}`} className={styles.link}>
               <article className={styles.card}>
                    <img src={apartment.cover} alt={apartment.title} />
                    <div className={styles.overlay}>
                         <h3>{apartment.title}</h3>
                    </div>
               </article>
          </Link>
     );
};

Card.propTypes = {
     apartment: PropTypes.object.isRequired,
};

export default Card;
