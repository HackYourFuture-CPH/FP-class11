import React from 'react';
import './progress-bar.style.css';
import moment from 'moment';
import PropTypes from 'prop-types';

function generateDays(totalDays) {
  const daysArr = [];
  for (let i = 0; i < totalDays; i += 1) {
    daysArr.push(i);
  }
  return daysArr;
}

function stageDays(stages) {
  let sum = 0;
  const stageLimit = stages.map((day) => {
    sum += day.duration;
    return sum;
  });
  return stageLimit;
}

function Tooltip({ day }) {
  return (
    <span className="toolTipText" style={{ visibility: 'visible' }}>
      Day: {day}
    </span>
  );
}

function TooltipStage({ stageName }) {
  return (
    <span className="tooltiptext-stage" style={{ visibility: 'visible' }}>
      {stageName}
    </span>
  );
}

function DayComponent({ classStyle, styling, children }) {
  return (
    <div className={classStyle} style={styling}>
      {children}
    </div>
  );
}

function ProgressBar({ startDate, currentDate, stages }) {
  const start = moment(startDate);
  const end = moment(currentDate);
  const daysPassed = end.diff(start, 'days');

  const totalDays = stages.reduce((prev, current) => {
    return prev + current.duration;
  }, 0);

  const stageDaysArr = stageDays(stages);
  const baseStage = [0];
  const stageDiv = baseStage.concat(stageDaysArr);
  const dayWidth = (1 / totalDays) * 100;
  let stageNameIndex = 0;
  const days = generateDays(totalDays);

  const dayBlock = days.map((day) => {
    const isPassed = day <= daysPassed;
    const restOfDays = day >= daysPassed;
    const classStyle = isPassed
      ? 'dayComponents tooltip tooltip-stage passedDays'
      : 'dayComponents tooltip-stage';
    const stageBorder = stageDaysArr.includes(day) ? '.3em' : '';
    const stageBorderColor =
      stageDaysArr.includes(day) && restOfDays ? 'skyblue' : '#004280';

    return (
      <DayComponent
        key={day}
        classStyle={classStyle}
        styling={{
          width: `${dayWidth}%`,
          borderWidth: stageBorder,
          borderColor: stageBorderColor,
        }}
      >
        {day === daysPassed && <Tooltip day={day} className="toolTipText" />}
        {stageDiv.includes(day) && (
          <TooltipStage
            stageName={capitalizeFirstLetter(stages[stageNameIndex++].name)}
            className="tooltiptext-stage"
          />
        )}
      </DayComponent>
    );
  });

  return (
    <div className="container">
      <h1>PROGRESS BAR</h1>
      <div className="progressBar">{dayBlock}</div>
    </div>
  );
}

export default ProgressBar;

TooltipStage.propTypes = {
  stageName: PropTypes.string.isRequired,
};

Tooltip.propTypes = {
  day: PropTypes.string.isRequired,
};

DayComponent.propTypes = {
  classStyle: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

ProgressBar.propTypes = {
  startDate: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  stages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
