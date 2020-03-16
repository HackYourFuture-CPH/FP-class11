import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './stage-details.style.css';
import SectionHeader from '../section-header/section-header.component';
import Button from '../button/button.component';

export default function StageDetails({
  inputNameTitlePairsObj,
  buttonValuesArr,
  labelValuesArr,
  saveFunc,
}) {
  const selectedBtnValue = buttonValuesArr[
    buttonValuesArr.length - 1
  ].toLowerCase();
  const [selectedStage, setSelectedStage] = useState(selectedBtnValue);

  return (
    <div className="stage-details-container">
      {/* Section header */}
      <SectionHeader onClick={() => null} index={1}>
        Stage Details
      </SectionHeader>

      <form className="stage-values-form">
        {/* Toggle buttons to select stage */}
        <div className="stage-buttons-container">
          {buttonValuesArr.map((stage) => {
            return (
              <Button
                type="toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedStage(stage.toLowerCase());
                }}
                toggled={selectedStage === stage.toLowerCase()}
              >
                {stage}
              </Button>
            );
          })}
        </div>

        {/* First column containing value descriptions */}
        <div className="stage-values-container">
          <div className="title-column">
            {Object.keys(inputNameTitlePairsObj).map((name) => (
              <p className="stage-details-title-item" key={name}>
                {inputNameTitlePairsObj[name]}
              </p>
            ))}
          </div>

          {/* Columns containing value levels */}
          {labelValuesArr.map((level) => {
            return (
              <div className={`${level.toLowerCase()}-column`}>
                {Object.keys(inputNameTitlePairsObj).map((name) => (
                  <label className="stage-details-value-item">
                    {level}:
                    <input
                      className="stage-value-input"
                      type="text"
                      pattern="[.0-9]{3}"
                      name={`${level.toLowerCase()}-${name}-${selectedStage}`}
                      title={`${level} ${name} in ${selectedStage} stage (number)`}
                    />
                  </label>
                ))}
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
  inputNameTitlePairsObj: PropTypes.instanceOf(Object).isRequired,
  buttonValuesArr: PropTypes.instanceOf(Array).isRequired,
  labelValuesArr: PropTypes.instanceOf(Array).isRequired,
  saveFunc: PropTypes.func.isRequired,
};
