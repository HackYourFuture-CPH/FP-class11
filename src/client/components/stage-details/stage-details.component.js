import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';

import SectionHeader from '../section-header/section-header.component';
import LabelsColumn from './stage-details-subcomponents/labels-column.component';
import StageButtons from './stage-details-subcomponents/stage-buttons.component';
import DefaultValuesColumns from './stage-details-subcomponents/default-values-columns.component';
import SaveButton from './stage-details-subcomponents/save-button.component';

export default function StageDetails({
  cropId,
  stages,
  levels,
  data,
  onChange,
}) {
  const PARAMETERS = {
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (g/m3)',
    ph: 'PH',
    ec: 'EC (ppm)',
    // eslint-disable-next-line @typescript-eslint/camelcase
    water_level: 'Water level (cm)',
  };

  // Get the parameter data for crop with id of cropId
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    setCropData(
      data.filter((dataPoint) => parseInt(dataPoint.fk_crop_id, 10) === cropId),
    );
  }, [cropId, data]);

  // Select the last stage to display as default
  const lastStage = Math.max(...stages.map((s) => s.id));
  const [selectedStageIndex, setSelectedStageIndex] = useState(lastStage);

  // Get data for the currently selected stage
  const [dataForStage, setDataForStage] = useState([]);

  useEffect(() => {
    const selectedStages = cropData.filter(
      (dataPoint) =>
        parseInt(dataPoint.fk_crop_stage_id, 10) === selectedStageIndex,
    );
    setDataForStage(selectedStages);
  }, [selectedStageIndex, cropData]);

  function handleValueInput(e, level, parameter) {
    const valueEntered = e.target.value;
    e.preventDefault();
    setCropData((prev) => {
      return updateCropDataOnInput(prev, valueEntered, level, parameter);
    });
  }

  function updateCropDataOnInput(prevData, valueEntered, level, parameter) {
    return prevData.map((dataPoint) => {
      if (
        Number(dataPoint.fk_crop_stage_id) === selectedStageIndex &&
        dataPoint.parameter === parameter
      ) {
        const updatedDataPoint = {
          ...dataPoint,
          [`${level}_value`]: valueEntered,
        };
        return updatedDataPoint;
      }
      return dataPoint;
    });
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
          stages={stages}
          selectedStageIndex={selectedStageIndex}
          setSelectedStageIndex={setSelectedStageIndex}
        />

        <div className="stage-values-container">
          <LabelsColumn PARAMETERS={PARAMETERS} />

          <DefaultValuesColumns
            selectedStageIndex={selectedStageIndex}
            PARAMETERS={PARAMETERS}
            dataForStage={dataForStage}
            stages={stages}
            handleValueInput={handleValueInput}
            levels={levels}
          />
        </div>

        <SaveButton />
      </form>
    </div>
  );
}

StageDetails.propTypes = {
  cropId: PropTypes.number.isRequired,
  stages: PropTypes.instanceOf(Array).isRequired,
  levels: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};
