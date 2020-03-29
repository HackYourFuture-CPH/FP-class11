import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashboardItems from '../dashboard-items/dashboard-items.component';
import '../dashboard-items/dashboard-items.style.css';

const NavigationButton = ({ icon, text, isactive, isuser }) => {
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
    <button
      type="button"
      isactive={isactive}
      isuser={isuser}
      className={className}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{text}</p>
      {isactive ? <DashboardItems items={items} /> : ''}
    </button>
  );
};

NavigationButton.defaultProps = {
  isuser: '',
};

NavigationButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  isactive: PropTypes.bool.isRequired,
  isuser: PropTypes.bool,
};
export default NavigationButton;