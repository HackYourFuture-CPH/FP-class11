import React from 'react';
import PropTypes from 'prop-types';

import SensorLevels from './sensor-levels.component';

export default function StageSensorDefaultLevels({
  sensors,
  sensorsLevelsForStage,
  onChange,
  stages,
  selectedStageIndex,
}) {
  return (
    <div className="stage-values-container">
      {sensors.map((sensor) => {
        return (
          <SensorLevels
            key={sensor.name}
            stages={stages}
            sensor={sensor}
            sensorsLevelsForStage={sensorsLevelsForStage}
            selectedStageIndex={selectedStageIndex}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}

StageSensorDefaultLevels.propTypes = {
  sensors: PropTypes.instanceOf(Array).isRequired,
  sensorsLevelsForStage: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  stages: PropTypes.instanceOf(Array).isRequired,
  selectedStageIndex: PropTypes.number.isRequired,
};
