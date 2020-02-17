import React from 'react';
import PropTypes from ''

const Anagram = ({ word }) => (
  <section>
    <p>{word}</p>
  </section>
);

Anagram.propTypes = {
  word: PropTypes.string
};

export default Anagram; 
