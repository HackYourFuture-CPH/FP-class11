import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './crop-summary-card.style.css';

const moment = require('moment');

moment().format();

export const CropSummaryCard = () => {
  const currentDate = moment();
  const harvestDate = moment({
    y: 2020,
    M: 2,
    d: 24,
    h: currentDate.hours(),
    m: currentDate.minutes(),
  });

  // these data should be taken/substituted from DB
  const projectDate = moment('2020-04-29');
  const prodStartDate = '12/01/2020';
  const prodEndDate = '11/03/2020';
  const stageName = 'Seeding';
  const dayCount = 2;
  const stat = 4;
  let classname;
  let msg;

  const harvestDuration = moment.duration(harvestDate.diff(currentDate));
  const [harvestDayLeft, setharvestDayLeft] = useState(0);

  const projDuration = moment.duration(projectDate.diff(currentDate));
  const [projDayLeft, setprojDayLeft] = useState(0);

  useEffect(() => {
    setharvestDayLeft(
      Math.floor(harvestDuration.asDays(harvestDuration.asMilliseconds())),
    );
    setprojDayLeft(
      Math.floor(projDuration.asDays(projDuration.asMilliseconds())),
    );
  }, [harvestDuration, projDuration]);

  // console.log(harvestDayLeft, projDayLeft);

  // sample condition for status
  switch (stat) {
    case 1:
      msg = 'CHECK PH';
      classname = 'check-ph';
      break;
    case 2:
      msg = 'FINISHED';
      classname = 'finished';
      break;
    case 3:
      msg = 'CANCELLED';
      classname = 'cancelled';
      break;
    default:
      msg = 'on time';
      classname = 'on-time';
      break;
  }

  return (
    <div className="card">
      <div className="card-header">
        <Header title="STATUS"> </Header>
        <Status message={msg} classname={classname} stat={stat} />
      </div>
      <Content
        harvestDayLeft={harvestDayLeft}
        projDayLeft={projDayLeft}
        prodStartDate={prodStartDate}
        prodEndDate={prodEndDate}
        stageName={stageName}
        dayCount={dayCount}
      />
    </div>
  );
};

export const Header = ({ title }) => {
  return <h1 className="card-title">{title}</h1>;
};

export const Status = ({ message, classname }) => {
  return <div className={`status ${classname}`}>{message}</div>;
};

export const Stage = ({ stageName, dayCount }) => {
  return (
    <p>
      {stageName} - Day {dayCount}
    </p>
  );
};

export const Content = ({
  harvestDayLeft,
  projDayLeft,
  prodStartDate,
  prodEndDate,
  stageName,
  dayCount,
}) => {
  return (
    <ul className="card-contents">
      <li>
        <p> Days left to harvest:</p>
        <p>
          in <span className="harvest-days">{harvestDayLeft}</span> days
        </p>
      </li>
      <li>
        <p>Days left to end the project:</p>
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

CropSummaryCard.propTypes = {
  title: PropTypes.string,
};
