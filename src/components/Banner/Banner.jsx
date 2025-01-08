import React from 'react';
import styles from './Banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ bannerImage, title }) => {
     return (
          <div className={styles.banner}>
               <img src={bannerImage} alt="Bannière" />
               <div className={styles.overlay}>{title && <h2>{title}</h2>}</div>
          </div>
     );
};

Banner.propTypes = {
     bannerImage: PropTypes.string.isRequired,
     title: PropTypes.string,
};

export default Banner;
