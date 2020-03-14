import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashbordItems from '../DashbordItems/Dashbord.component';
import '../DashbordItems/Dashbord.style.css';

const ButtonM = ({ icon, text, active, user }) => {
  return (
    <button
      type="button"
      active={active}
      className={`
      ${active ? 'itemActive' : 'item'}
    ${user ? 'user' : ''}`}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{text}</p>
      {active ? <DashbordItems /> : ''}
    </button>
  );
};
ButtonM.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  user: PropTypes.bool.isRequired,
};
export default ButtonM;
