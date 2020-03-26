import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';
import SectionHeader from '../section-header/section-header.component';
import Button from '../button/button.component';

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

  function handleInputChange(e, level, parameter) {
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
      {/* Section header */}
      <SectionHeader onClick={() => null} tabIndex={0}>
        Stage Details
      </SectionHeader>

      <form className="stage-values-form" onSubmit={saveUpdatedCropData}>
        {/* Toggle buttons to select stage */}
        <div className="stage-buttons-container">
          {stages.map((stage) => {
            return (
              <Button
                key={stage.id}
                type="toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedStageIndex(stage.id);
                }}
                toggled={selectedStageIndex === stage.id}
              >
                {stage.name}
              </Button>
            );
          })}
        </div>

        {/* Column containing parameter labels */}
        <div className="stage-values-container">
          <div className="title-column">
            {Object.keys(PARAMETERS).map((param) => (
              <p className="stage-details-title-item" key={param}>
                {PARAMETERS[param]}
              </p>
            ))}
          </div>

          {/* Columns containing values per parameter and level */}
          {levels.map((level) => {
            return (
              <div
                className={`${level}-column`}
                key={`stage-${selectedStageIndex}-${level}-column`}
              >
                {Object.keys(PARAMETERS).map((parameter) => {
                  const dataForParameter = dataForStage.find((dataPoint) => {
                    return dataPoint.parameter === parameter;
                  });
                  const value = dataForParameter
                    ? dataForParameter[`${level}_value`]
                    : '';
                  const name = `${level}-${parameter}-${
                    stages[selectedStageIndex - 1].name
                  }`;
                  const title = `${level} ${parameter} in ${
                    stages[selectedStageIndex - 1].name
                  }`;
                  return (
                    <label
                      className="stage-details-value-item"
                      key={`stage-${selectedStageIndex}-${level}-${parameter}`}
                    >
                      {level}:
                      <input
                        className="stage-value-input"
                        type="text"
                        pattern="^[0-9]+([,.][0-9]+)?$"
                        name={name}
                        title={title}
                        value={value}
                        onChange={(e) => handleInputChange(e, level, parameter)}
                      />
                    </label>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Save button */}
        <div className="save-btn-container">
          <Button type="primary" onClick={() => null}>
            Save Crop Details
          </Button>
        </div>
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
