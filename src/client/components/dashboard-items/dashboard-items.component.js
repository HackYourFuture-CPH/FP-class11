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
        <li key={item.id} id={item.id}>
          <Link
            to="/chartDetail-smartpage"
            className="pageLink"
            id={item.id}
            onClick={(e) => handleClick(e)}
            onKeyDown={handleClick}
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
