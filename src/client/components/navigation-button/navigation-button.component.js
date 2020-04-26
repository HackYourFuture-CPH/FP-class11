import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashboardItems from '../dashboard-items/dashboard-items.component';
import './navigation-button.style.css';

const NavigationButton = ({
  icon,
  text,
  isActive,
  isUser,
  isVisible,
  handleClick,
  items,
}) => {
  const className = `${isActive ? 'item-active' : 'item'} ${
    isUser ? 'user' : ''
  } ${isVisible ? 'visible' : 'hidden'}`;
  return (
    <section className={className}>
      <button type="button" onClick={handleClick} className="navigation-btn">
        <FontAwesomeIcon icon={icon} className="icon" />
        <p className="navtext">{text}</p>
      </button>

      {isActive ? (
        <DashboardItems items={items} handleClick={handleClick} />
      ) : (
        ''
      )}
    </section>
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
  items: PropTypes.instanceOf(Array).isRequired,
};
export default NavigationButton;
