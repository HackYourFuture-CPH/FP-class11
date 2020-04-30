import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './label.styles.css';

export default function Label({ title, className }) {
  return <span className={classNames('label', className)}>{title}</span>;
}

Label.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: 'label-interaction',
};
