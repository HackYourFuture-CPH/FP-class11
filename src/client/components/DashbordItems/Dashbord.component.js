import React from 'react';
import '../navigation-button/navigation-button.style.css';
import PropTypes from 'prop-types';

const DashbordItems = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};

DashbordItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default DashbordItems;
