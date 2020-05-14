import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

const Meme = ({ top, image, bottom }) => (
  <section className={styles.Meme}>
    <p className={styles.topcenter}>{top}</p>
    <img src={image}/>
    <p className={styles.bottomcenter}>{bottom}</p>
  </section>
);

Meme.propTypes = {
  top: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired
};

export default Meme;
