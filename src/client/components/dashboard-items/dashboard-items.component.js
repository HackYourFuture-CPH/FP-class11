import React from 'react';
import './dashboard-items.style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DashboardItems = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} id={item.id}>
          {item.to ? (
            <Link to={item.to} onClick={(e) => e.stopPropagation()}>
              {item.value}
            </Link>
          ) : (
            <>{item.value}</>
          )}
        </li>
      ))}
    </ul>
  );
};

DashboardItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default DashboardItems;
