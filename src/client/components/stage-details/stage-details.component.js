import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';

import SectionHeader from '../section-header/section-header.component';
import StageButtons from './stage-details-subcomponents/stage-buttons.component';
import StageSensorDefaultLevels from './stage-details-subcomponents/stage-sensor-default-levels.component';
import SaveButton from './stage-details-subcomponents/save-button.component';

const STAGES = [
  { id: 1, name: 'Seeding' },
  { id: 2, name: 'Propagation' },
  { id: 3, name: 'Maturity' },
  { id: 4, name: 'Harvest' },
];

const ENVIRONMENT_SENSORS = [
  { name: 'temperature', label: 'Temperature (°C)' },
  { name: 'humidity', label: 'Humidity (g/m3)' },
  { name: 'ph', label: 'PH' },
  { name: 'ec', label: 'EC (ppm)' },
  { name: 'water_level', label: 'Water level (cm)' },
];

export default function StageDetails({ data, onChange }) {
  const [cropData, setCropData] = useState(data);

  // Select the first stage to display as default
  const firstStage = Math.min(...STAGES.map((s) => s.id));
  const [selectedStageIndex, setSelectedStageIndex] = useState(firstStage);

  // Get data for the currently selected stage
  const [dataForStage, setDataForStage] = useState(
    cropData.filter(
      (item) => Number(item.fk_crop_stage_id) === selectedStageIndex,
    ),
  );

  useEffect(() => {
    const dataForSelectedStage = cropData.filter(
      (item) => Number(item.fk_crop_stage_id) === selectedStageIndex,
    );
    setDataForStage(dataForSelectedStage);
  }, [selectedStageIndex, cropData]);

  function onInputChange(e, level, sensorName) {
    e.preventDefault();
    const newValue = e.target.value;
    updateCropDataOnChange(newValue, level, sensorName);
  }

  function updateCropDataOnChange(newValue, level, sensorName) {
    const newData = cropData.map((item) => {
      if (
        Number(item.fk_crop_stage_id) === selectedStageIndex &&
        item.parameter === sensorName
      ) {
        const updatedItem = {
          ...item,
          [`${level}_value`]: newValue,
        };
        return updatedItem;
      }
      return item;
    });
    setCropData(newData);
  }

  function saveUpdatedCropData(e) {
    e.preventDefault();
    onChange(cropData);
  }

  return (
    <div className="stage-details-container">
      <SectionHeader onClick={() => null} tabIndex={0}>
        Stage Details
      </SectionHeader>

      <form className="stage-values-form" onSubmit={saveUpdatedCropData}>
        <StageButtons
          STAGES={STAGES}
          selectedStageIndex={selectedStageIndex}
          setSelectedStageIndex={setSelectedStageIndex}
        />

        <StageSensorDefaultLevels
          sensors={ENVIRONMENT_SENSORS}
          stages={STAGES}
          sensorsLevelsForStage={dataForStage}
          selectedStageIndex={selectedStageIndex}
          onChange={onInputChange}
        />

        <SaveButton />
      </form>
    </div>
  );
}

StageDetails.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};
