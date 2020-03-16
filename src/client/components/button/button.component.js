import React from 'react';
import './button.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import theme from '../../theme';

export default function Button({ children, type, size, onClick, toggled }) {
  const background = {
    primary: theme.colors.interaction,
    danger: theme.colors.danger,
  };

  const btnClass = classNames({
    btn: true,
    'btn-primary': type === 'primary',
    'btn-secondary': type === 'secondary',
    'btn-danger': type === 'danger',
    'btn-toggle': type === 'toggle',
    'btn-large': size,
    toggled, // true if the toggle button is pressed and held down
  });

  return (
    <input
      className={btnClass}
      style={background[type] ? { backgroundColor: background[type] } : null}
      type="submit"
      onClick={onClick}
      value={children}
    />
  );
}

Button.defaultProps = {
  toggled: false,
  size: '',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'toggle'])
    .isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
};
