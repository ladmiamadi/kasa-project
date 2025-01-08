import React from 'react';
import { Link } from 'react-router';
import styles from './Error.module.scss';

const Error = () => {
     return (
          <div className={styles.error}>
               <h2>404</h2>
               <h3>Oups! La page que vous demandez n'existe pas</h3>
               <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
     );
};

export default Error;
