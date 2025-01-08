import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.scss';

const Header = () => {
     return (
          <header className={styles.navbar}>
               <Logo />
               <nav>
                    <ul>
                         <li>
                              <NavLink
                                   to="/"
                                   className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                   }
                              >
                                   Accueil
                              </NavLink>
                         </li>
                         <li>
                              <NavLink
                                   to="/about"
                                   className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                   }
                              >
                                   A propos
                              </NavLink>
                         </li>
                    </ul>
               </nav>
          </header>
     );
};

export default Header;
