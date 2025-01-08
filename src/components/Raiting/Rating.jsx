import React from 'react';
import styles from './Rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
     return (
          <div className={styles.rating}>
               {[...Array(5).keys()].map((item) => (
                    <FontAwesomeIcon
                         icon={faStar}
                         className={item < rating ? styles.active : ''}
                         key={`rating${item}`}
                    />
               ))}
          </div>
     );
};

Rating.propTypes = {
     rating: PropTypes.string.isRequired,
};

export default Rating;
