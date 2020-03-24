import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';
import SectionHeader from '../section-header/section-header.component';
import Button from '../button/button.component';

export default function StageDetails({
  cropID,
  parametersAndLabels,
  stages,
  levels,
  data,
  saveFunc,
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

  return (
    <div className="stage-details-container">
      {/* Section header */}
      <SectionHeader onClick={() => null} index={1}>
        Stage Details
      </SectionHeader>

      <form className="stage-values-form">
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
              <div className={`${level}-column`}>
                {Object.keys(parametersAndLabels).map((parameter) => {
                  const dataForParameter = dataForStage.filter((dataPoint) => {
                    return dataPoint.parameter === parameter;
                  });
                  const value = dataForParameter[0]
                    ? dataForParameter[0][`${level}_value`]
                    : '';
                  return (
                    <label className="stage-details-value-item">
                      {level}:
                      <input
                        className="stage-value-input"
                        type="text"
                        pattern="[0-9]{4}"
                        name={`${level}-${parameter}-${
                          stages[selectedStageNumber - 1].name
                        }`}
                        title={`${level} ${parameter} in ${
                          stages[selectedStageNumber - 1].name
                        }`}
                        value={value}
                        onChange={(e) => {
                          e.preventDefault();
                        }}
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
          <Button type="primary" onClick={saveFunc}>
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
  saveFunc: PropTypes.func.isRequired,
};
