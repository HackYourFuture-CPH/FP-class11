import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.style.css';

export default function SectionHeader({ children, onClick, tabIndex }) {
  return (
    <div
      className="section-header"
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};
