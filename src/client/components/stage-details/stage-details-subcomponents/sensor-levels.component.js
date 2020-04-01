import React from 'react';
import PropTypes from 'prop-types';

import SensorValueInput from './sensor-value-input.component';

export default function SensorLevels({
  stages,
  sensor,
  sensorsLevelsForStage,
  selectedStageIndex,
  onChange,
}) {
  return (
    <div className="sensor-values-container">
      <p>{sensor.label}</p>
      <div className="levels-container">
        {['optimum', 'min', 'max'].map((level) => {
          let sensorValue = sensorsLevelsForStage.find(
            (item) => item.parameter === sensor.name,
          );
          sensorValue = sensorValue ? sensorValue[`${level}_value`] : '';
          const name = `${level}-${sensor.name}-in-${stages
            .find((stage) => Number(stage.id) === selectedStageIndex)
            .name.toLowerCase()}`;

          return (
            <SensorValueInput
              key={`${level}_${sensor.name}`}
              sensorName={sensor.name}
              sensorLevel={level}
              sensorValue={sensorValue}
              onChange={onChange}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
}

SensorLevels.propTypes = {
  stages: PropTypes.instanceOf(Array).isRequired,
  sensor: PropTypes.instanceOf(Object).isRequired,
  sensorsLevelsForStage: PropTypes.instanceOf(Array).isRequired,
  selectedStageIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
