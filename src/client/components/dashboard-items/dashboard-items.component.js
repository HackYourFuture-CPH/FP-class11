import React from 'react';
import './dashboard-items.style.css';
import PropTypes from 'prop-types';

const DashboardItems = ({ items, handleClick }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={item.id}
          id={item.id}
          onClick={(e) => handleClick(e)}
          onKeyDown={handleClick}
        >
          {item.value}
        </li>
      ))}
    </ul>
  );
};

DashboardItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DashboardItems;
