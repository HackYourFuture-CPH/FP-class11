import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashboardItems from '../dashbord-items/dashboard-items.component';
import '../dashbord-items/dashboard-items.style.css';

const NavigationButton = ({ icon, text, isActive, isUser, handleClick }) => {
  const className = `${isActive ? 'item-active' : 'item'} ${
    isUser ? 'user' : ''
  }`;
  const items = [
    { id: 1, value: 'Temperature' },
    { id: 2, value: 'Humidity' },
    { id: 3, value: 'PH' },
    { id: 4, value: 'EC' },
    { id: 5, value: 'Water' },
  ];
  return (
    <button type="button" className={className} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className="icon" />
      <p className="navtext">{text}</p>
      {isActive ? <DashboardItems items={items} /> : ''}
    </button>
  );
};
NavigationButton.defaultProps = {
  isActive: false,
  isUser: false,
  handleClick: null,
};
NavigationButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isUser: PropTypes.bool,
  handleClick: PropTypes.func,
};
export default NavigationButton;
