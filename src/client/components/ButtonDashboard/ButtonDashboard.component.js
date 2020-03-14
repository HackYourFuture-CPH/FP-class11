import React from 'react';
import PropTypes from 'prop-types';
import UpdateDateRange from '../DateRange/UpdateDateRange.component';

const ButtonDashboard = ({ buttonText, active }) => {
  return (
    <button type="button">
      {active ? (
        <UpdateDateRange date="date" text="update range" />
      ) : (
        buttonText
      )}
    </button>
  );
};

ButtonDashboard.propTypes = {
  buttonText: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ButtonDashboard;
