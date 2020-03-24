import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';
import SectionHeader from '../section-header/section-header.component';
import Button from '../button/button.component';

function capitalizeString(str) {
  return str[0].toUpperCase().concat(str.slice(1, str.length));
}

export default function StageDetails({
  cropID,
  parametersAndLabels,
  stages,
  levels,
  data,
}) {
  // Get the parameter data for crop with id of cropID
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    setCropData(
      data.filter((dataPoint) => parseInt(dataPoint.fk_crop_id, 10) === cropID),
    );
  }, [cropID, data]);

  // Select the last stage to display as default
  const [selectedStageNumber, setSelectedStageNumber] = useState(
    Math.max(...stages.map((s) => s.id)),
  );

  // Get data for the currently selected stage
  const [dataForStage, setDataForStage] = useState([]);

  useEffect(() => {
    setDataForStage(
      cropData
        ? cropData.filter(
            (dataPoint) =>
              parseInt(dataPoint.fk_crop_stage_id, 10) === selectedStageNumber,
          )
        : [],
    );
  }, [selectedStageNumber, cropData]);

  function handleInputChange(e, level, parameter) {
    const valueEntered = e.target.value;
    e.preventDefault();
    setCropData((prev) => {
      return prev.map((dataPoint) => {
        if (
          Number(dataPoint.fk_crop_stage_id) === selectedStageNumber &&
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
    });
  }

  function saveUpdatedCropData(e) {
    e.preventDefault();
    /* TO DO: SAVE UPDATED cropData */
  }

  return (
    <div className="stage-details-container">
      {/* Section header */}
      <SectionHeader onClick={() => null} tabIndex={0}>
        Stage Details
      </SectionHeader>

      <form
        className="stage-values-form"
        onSubmit={(e) => saveUpdatedCropData(e)}
      >
        {/* Toggle buttons to select stage */}
        <div className="stage-buttons-container">
          {stages.map((stage) => {
            return (
              <Button
                key={stage.id}
                type="toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedStageNumber(stage.id);
                }}
                toggled={selectedStageNumber === stage.id}
              >
                {stage.name}
              </Button>
            );
          })}
        </div>

        {/* Column containing parameter labels */}
        <div className="stage-values-container">
          <div className="title-column">
            {Object.keys(parametersAndLabels).map((name) => (
              <p className="stage-details-title-item" key={name}>
                {parametersAndLabels[name]}
              </p>
            ))}
          </div>

          {/* Columns containing values per parameter and level */}
          {levels.map((level) => {
            return (
              <div
                className={`${level}-column`}
                key={`stage-${selectedStageNumber}-${level}-column`}
              >
                {Object.keys(parametersAndLabels).map((parameter) => {
                  const dataForParameter = dataForStage.filter((dataPoint) => {
                    return dataPoint.parameter === parameter;
                  });
                  const value = dataForParameter[0]
                    ? dataForParameter[0][`${level}_value`]
                    : '';
                  const name = `${level}-${parameter}-${
                    stages[selectedStageNumber - 1].name
                  }`;
                  const title = `${level} ${parameter} in ${
                    stages[selectedStageNumber - 1].name
                  }`;
                  return (
                    <label
                      className="stage-details-value-item"
                      key={`stage-${selectedStageNumber}-${level}-${parameter}`}
                    >
                      {capitalizeString(level)}:
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
  cropID: PropTypes.number.isRequired,
  parametersAndLabels: PropTypes.instanceOf(Object).isRequired,
  stages: PropTypes.instanceOf(Array).isRequired,
  levels: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};
