import React, { useContext } from 'react';
import './dashboard-items.style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChartDataContext } from '../../containers/chart-detail-page/chart-detail-context';

const DashboardItems = ({ items }) => {
  const listItemClicked = useContext(ChartDataContext);
  const { handleClick } = listItemClicked;
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to="/chartDetail-smartpage"
            id={item.id}
            className="a"
            onClick={handleClick}
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
