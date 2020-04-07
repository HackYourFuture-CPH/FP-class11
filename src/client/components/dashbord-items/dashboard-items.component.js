import React from 'react';
import '../navigation-button/navigation-button.style.css';
import PropTypes from 'prop-types';

const DashbordItems = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>
          <a href={`/chart-detail-page/${item.value.toLowerCase()}`}>
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
};

DashbordItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
export default DashbordItems;
