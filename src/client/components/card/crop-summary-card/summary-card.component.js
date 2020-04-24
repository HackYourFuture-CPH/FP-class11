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
      {harvestDayLeft !== null && (
        <li className="">
          <p> Days left to harvest:</p>
          <p>
            in <span className="harvest-days">{harvestDayLeft}</span> days
          </p>
        </li>
      )}
      {projDayLeft !== null && (
        <li>
          <p>Days left to end the batch:</p>
          <p>{projDayLeft} days </p>
        </li>
      )}
      <li>
        <p className="current-stage">Current stage:</p>
        {dayCount === null || dayCount === 0 ? (
          <Stage stageName={stageName} />
        ) : (
          <Stage stageName={stageName} dayCount={dayCount} />
        )}
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
    <>
      {dayCount === null || dayCount === 0 ? (
        <p>{stageName}</p>
      ) : (
        <p>
          {stageName} - Day {dayCount}
        </p>
      )}
    </>
  );
};

Summary.defaultProps = {
  harvestDayLeft: 0,
  projDayLeft: 0,
  dayCount: 0,
};

Summary.propTypes = {
  harvestDayLeft: PropTypes.number,
  projDayLeft: PropTypes.number,
  prodStartDate: PropTypes.string.isRequired,
  prodEndDate: PropTypes.string.isRequired,
  stageName: PropTypes.string.isRequired,
  dayCount: PropTypes.number,
};

Stage.defaultProps = {
  dayCount: 0,
};

Stage.propTypes = {
  stageName: PropTypes.string.isRequired,
  dayCount: PropTypes.number,
};
