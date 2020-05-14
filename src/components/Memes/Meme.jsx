import React from 'react';
import PropTypes from 'prop-types';

const Meme = ({ top, image, bottom }) => (
  <section>
    <p>{top}</p>
    <img src={image}/>
    <p>{bottom}</p>
  </section>
);

Meme.propTypes = {
  top: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired
};

export default Meme;
