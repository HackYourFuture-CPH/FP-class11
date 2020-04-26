import React from 'react';
import PropTypes from 'prop-types';
import './update-date-range.style.css';
import Button from '../button/button.component';

const UpdateDateRange = ({
  date,
  text,
  setStartCustom,
  setEndCustom,
  updateClick,
  setUpdateClick,
}) => {
  return (
    <div className="date-component-wrapper">
      <label htmlFor="fromDate" className="update-label">
        From:
        <input
          className="input-date"
          type={date}
          name="fromDate"
          id="fromDate"
          onChange={(e) => setStartCustom(e.target.value)}
        />
      </label>
      <label htmlFor="untilDate">
        Until:
        <input
          className="input-date"
          type={date}
          name="untilDate"
          id="untilDate"
          onChange={(e) => setEndCustom(e.target.value)}
        />
      </label>
      <Button
        type="toggle"
        onClick={() => {
          setUpdateClick(!updateClick);
        }}
      >
        {text}
      </Button>
    </div>
  );
};

UpdateDateRange.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setEndCustom: PropTypes.func.isRequired,
  setStartCustom: PropTypes.func.isRequired,
  setUpdateClick: PropTypes.func.isRequired,
  updateClick: PropTypes.bool.isRequired,
};

export default UpdateDateRange;
