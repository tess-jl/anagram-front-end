import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ message }) => (
  <h2>{message}</h2>
);

Loading.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loading;
