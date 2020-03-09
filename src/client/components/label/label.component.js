import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './label.styles.css';

export default function Label({ title, active }) {
  return <span className={classNames('label', { active })}>{title}</span>;
}

Label.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
