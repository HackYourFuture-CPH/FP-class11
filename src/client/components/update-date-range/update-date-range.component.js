import React from 'react';
import PropTypes from 'prop-types';
import './update-date-range.style.css';
import Button from '../button/button.component';

const UpdateDateRange = ({ date, text }) => {
  return (
    <div className="date-component-wrapper">
      <label htmlFor="fromDate">From:</label>
      <input className="input-date" type={date} name="fromDate" id="fromDate" />
      <label htmlFor="untilDate">Until: </label>
      <input
        className="input-date"
        type={date}
        name="untilDate"
        id="untilDate"
      />
      <Button type="toggle" size="large">
        {text}
      </Button>
    </div>
  );
};

UpdateDateRange.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default UpdateDateRange;
