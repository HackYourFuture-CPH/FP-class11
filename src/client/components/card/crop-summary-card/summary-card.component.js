import React from 'react';
import PropTypes from 'prop-types';
import './crop-summary-card.style.css';

export const Summary = ({
  harvestDayLeft,
  projDayLeft,
  prodStartDate,
  prodEndDate,
  stageName,
  dayCount,
}) => {
  return (
    <ul className="card-contents">
      <li className="">
        <p> Days left to harvest:</p>
        <p>
          in <span className="harvest-days">{harvestDayLeft}</span> days
        </p>
      </li>
      <li>
        <p>Days left to end the batch:</p>
        <p>{projDayLeft} days </p>
      </li>
      <li>
        <p>Current stage:</p>
        <Stage stageName={stageName} dayCount={dayCount} />
      </li>
      <li>
        <p>Production Start Date:</p>
        <p>{prodStartDate}</p>
      </li>
      <li>
        <p>Production End Date:</p>
        <p>{prodEndDate}</p>
      </li>
    </ul>
  );
};

export const Stage = ({ stageName, dayCount }) => {
  return (
    <p>
      {stageName} - Day {dayCount}
    </p>
  );
};

Summary.propTypes = {
  harvestDayLeft: PropTypes.number.isRequired,
  projDayLeft: PropTypes.number.isRequired,
  prodStartDate: PropTypes.string.isRequired,
  prodEndDate: PropTypes.string.isRequired,
  stageName: PropTypes.string.isRequired,
  dayCount: PropTypes.number.isRequired,
};

Stage.propTypes = {
  stageName: PropTypes.string.isRequired,
  dayCount: PropTypes.number.isRequired,
};
