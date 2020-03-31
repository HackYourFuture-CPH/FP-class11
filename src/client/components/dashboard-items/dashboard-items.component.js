import React from 'react';
import '../navigation-button/navigation-button.style.css';
import PropTypes from 'prop-types';

const DashboardItems = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};

DashboardItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
export default DashboardItems;
