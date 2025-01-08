import React from 'react';
import styles from './Host.module.scss';
import PropTypes from 'prop-types';

const Host = ({ name, picture }) => {
     return (
          <div className={styles.host}>
               <h3 className={styles.name}>{name}</h3>
               <img src={picture} alt={name} className={styles.image} />
          </div>
     );
};

Host.propTypes = {
     name: PropTypes.string.isRequired,
     picture: PropTypes.string.isRequired,
};

export default Host;
