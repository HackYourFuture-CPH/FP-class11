import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({ children }) => {
  return <div>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
