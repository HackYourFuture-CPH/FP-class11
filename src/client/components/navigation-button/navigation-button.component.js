import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashbordItems from '../dashboard-items/dashboard-items.component';
import '../dashboard-items/dashboard-items.style.css';

const NavigationButton = ({ icon, text, isactive, isuser, handleClick }) => {
  const className = `${isactive ? 'itemActive' : 'item'} ${
    isuser ? 'user' : ''
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
      <p>{text}</p>
      {isactive ? <DashbordItems items={items} /> : ''}
    </button>
  );
};

NavigationButton.defaultProps = {
  isactive: false,
  isuser: false,
  handleClick: null,
};

NavigationButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  isactive: PropTypes.bool,
  isuser: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default NavigationButton;
