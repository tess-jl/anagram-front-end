import React from 'react';
import PropTypes from 'prop-types';

const Anagram = ({ word }) => (
  <section>
    <p>{word}</p>
  </section>
);

Anagram.propTypes = {
  word: PropTypes.string
};

export default Anagram; 
