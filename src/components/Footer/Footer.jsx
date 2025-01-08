import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo.jsx';

const Footer = () => {
     return (
          <footer className={styles.footer}>
               <div className={styles.logo}>
                    <Logo color="white" />
               </div>
               <p>© 2020 Kasa. All rights reserved</p>
          </footer>
     );
};

export default Footer;
