import React from 'react';
import './link.style.css';
import PropTypes from 'prop-types';

export default function Link({ href, text }) {
  return (
    <a href={href} className="link">
      {text}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
