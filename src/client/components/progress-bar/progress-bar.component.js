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
    <span className="tooltip-text" style={{ visibility: 'visible' }}>
      Day {day}
    </span>
  );
}

function TooltipStage({ stageName }) {
  return (
    <span className="tooltip-text-stage" style={{ visibility: 'visible' }}>
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
  const daysPassed = end.diff(start, 'days') + 1;

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
    const isPassed = day < daysPassed;
    const restOfDays = day >= daysPassed;
    const classStyle = isPassed
      ? 'day-components tooltip tooltip-stage passed-days'
      : 'day-components tooltip tooltip-stage';
    const stageBorder = stageDaysArr.includes(day + 1) ? '.3em' : '';
    const stageBorderColor =
      stageDaysArr.includes(day + 1) && restOfDays
        ? 'dark-blue'
        : 'rgba(59,67,73, 0.75)';

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
        {day === daysPassed && <Tooltip day={day} className="tooltip-text" />}
        {stageDiv.includes(day) && (
          <TooltipStage
            stageName={capitalizeFirstLetter(stages[stageNameIndex++].name)}
            className="tooltip-text-stage"
          />
        )}
      </DayComponent>
    );
  });

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">{dayBlock}</div>
    </div>
  );
}

export default ProgressBar;

TooltipStage.propTypes = {
  stageName: PropTypes.string.isRequired,
};

Tooltip.propTypes = {
  day: PropTypes.number.isRequired,
};

DayComponent.propTypes = {
  classStyle: PropTypes.string.isRequired,
  styling: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.array]).isRequired,
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
