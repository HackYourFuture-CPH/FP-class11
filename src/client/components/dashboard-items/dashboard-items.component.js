import React, { useContext } from 'react';
import './dashboard-items.style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChartDataContext } from '../../containers/chart-detail-page/chart-detail-page.context';

const DashboardItems = ({ items }) => {
  const { handleClick } = useContext(ChartDataContext);
  return (
    <ul className="list">
      {items.map((item) => (
        <li
          key={item.id}
          id={item.id}
          // onKeyDown={(e) => handleClick(e)}
        >
          <Link
            to="/chartDetail-smartpage"
            id={item.id}
            onClick={handleClick}
            className="a"
          >
            {item.value}
          </Link>
        </li>
      ))}
    </ul>
  );
};

DashboardItems.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
export default DashboardItems;
