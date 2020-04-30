import React from 'react';
import PropTypes from 'prop-types';
import './update-date-range.style.css';
import Button from '../button/button.component';

const UpdateDateRange = ({
  chartStartDate,
  date,
  text,
  setStartCustom,
  setEndCustom,
  updateClick,
  setUpdateClick,
}) => {
  const today = String(new Date().toISOString()).slice(0, 10);
  return (
    <div className="date-component-wrapper">
      <label htmlFor="fromDate" className="update-label">
        From:
        <input
          className="input-date"
          type={date}
          min={chartStartDate}
          max={today}
          name="fromDate"
          id="fromDate"
          onChange={(e) => setStartCustom(e.target.valueAsDate)}
        />
      </label>
      <label htmlFor="untilDate">
        Until:
        <input
          className="input-date"
          type={date}
          min={chartStartDate}
          max={today}
          name="untilDate"
          id="untilDate"
          onChange={(e) => {
            setEndCustom(new Date(new Date(e.target.valueAsDate).getTime()));
          }}
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
  chartStartDate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setEndCustom: PropTypes.func.isRequired,
  setStartCustom: PropTypes.func.isRequired,
  setUpdateClick: PropTypes.func.isRequired,
  updateClick: PropTypes.bool.isRequired,
};

export default UpdateDateRange;
