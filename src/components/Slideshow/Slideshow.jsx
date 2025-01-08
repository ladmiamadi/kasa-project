import React, { useState } from 'react';
import styles from './Slideshow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faAngleLeft,
     faAngleRight,
     faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Slideshow = ({ slides, title }) => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const goToNextSlide = () => {
          const nextIndex = (currentIndex + 1) % slides.length;

          setCurrentIndex(nextIndex);
     };

     const goToPreviousSlide = () => {
          const previousIndex =
               (currentIndex - 1 + slides.length) % slides.length;

          setCurrentIndex(previousIndex);
     };

     return (
          <div className={styles.slide}>
               {slides.map((slide, index) => (
                    <img
                         key={index}
                         className={index === currentIndex ? styles.active : ''}
                         src={slide}
                         alt={title + index}
                    />
               ))}
               {slides.length > 1 && (
                    <>
                         <p>{`${currentIndex + 1}/${slides.length}`}</p>
                         <button
                              onClick={goToPreviousSlide}
                              className={styles.previous}
                         >
                              <FontAwesomeIcon icon={faAngleLeft} />
                         </button>
                         <button
                              onClick={goToNextSlide}
                              className={styles.next}
                         >
                              <FontAwesomeIcon icon={faAngleRight} />
                         </button>
                    </>
               )}
          </div>
     );
};

Slideshow.propTypes = {
     slides: PropTypes.array.isRequired,
     title: PropTypes.string.isRequired,
};

export default Slideshow;
