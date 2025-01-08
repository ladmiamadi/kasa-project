import React, { useState } from 'react';
import styles from './Collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
     const toggleCollapse = () => setOpen(!open);

     const [open, setOpen] = useState(false);

     return (
          <div className={styles.collapse}>
               <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <button onClick={toggleCollapse} className={styles.toggle}>
                         {open ? (
                              <FontAwesomeIcon icon={faAngleUp} />
                         ) : (
                              <FontAwesomeIcon icon={faAngleDown} />
                         )}
                    </button>
               </div>
               {open && <div className={styles.content}>{content}</div>}
          </div>
     );
};

Collapse.propTypes = {
     title: PropTypes.string.isRequired,
     content: PropTypes.object,
};

export default Collapse;
