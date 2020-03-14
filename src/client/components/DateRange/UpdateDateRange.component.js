import React from 'react';
import PropTypes from 'prop-types';

const UpdateDateRange = ({ date, text }) => {
  return (
    <div>
      <label htmlFor="fromDate">
        From:
        <input type={date} name="fromDate" id="fromDate" />
      </label>
      <label htmlFor="untilDate">
        Until:
        <input type={date} name="untilDate" id="untilDate" />
      </label>
      <button type="button">{text}</button>
    </div>
  );
};

UpdateDateRange.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default UpdateDateRange;
