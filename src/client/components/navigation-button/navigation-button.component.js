import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashboardItems from '../dashboard-items/dashboard-items.component';
import '../dashboard-items/dashboard-items.style.css';

const NavigationButton = ({
  icon,
  text,
  isActive,
  isUser,
  isVisible,
  handleClick,
}) => {
  const className = `${isActive ? 'item-active' : 'item'} ${
    isUser ? 'user' : ''
  } ${isVisible ? 'visible' : 'hidden'}`;
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
      {isActive ? (
        <DashboardItems items={items} handleClick={handleClick} />
      ) : (
        ''
      )}
    </button>
  );
};
NavigationButton.defaultProps = {
  isActive: false,
  isUser: false,
  isVisible: true,
  handleClick: null,
};
NavigationButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isUser: PropTypes.bool,
  isVisible: PropTypes.bool,
  handleClick: PropTypes.func,
};
export default NavigationButton;
