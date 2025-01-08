import React from 'react';
import styles from './Tag.module.scss';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
     return <p className={styles.tag}>{tag}</p>;
};

Tag.propTypes = {
     tag: PropTypes.string.isRequired,
};

export default Tag;
