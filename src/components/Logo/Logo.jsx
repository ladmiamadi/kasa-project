import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/white-logo.png';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Logo = ({ color }) => {
     return (
          <h1 aria-label="Kasa">
               <Link to="/">
                    <img
                         src={color === 'white' ? whiteLogo : logo}
                         alt="Logo Kasa"
                         className={styles.logo}
                    />
               </Link>
          </h1>
     );
};

Logo.propTypes = {
     color: PropTypes.string,
};

export default Logo;
