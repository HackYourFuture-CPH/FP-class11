import React, { useState } from 'react';
import SectionHeader from '../section-header/section-header.component';
import Button from '../buttons/button.component';
import './stage-details.style.css';

export default function StageDetails() {
  const [selectedStage, setSelectedStage] = useState('harvest');

  const inputLabelNamePairs = {
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (g/m3)',
    ph: 'PH',
    ec: 'EC (ppm)',
    'water-level': 'Water level (cm)',
  };

  return (
    <div className="stage-details-container">
      {/* Section header */}
      <SectionHeader onClick={() => null} index={1}>
        Stage Details
      </SectionHeader>

      <form className="stage-values-form">
        {/* Row of selector (toggle) buttons */}
        <div className="stage-buttons-container">
          {['Seeding', 'Propagation', 'Maturity', 'Harvest'].map((stage) => {
            return (
              <Button
                variant="toggle"
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

        {/* First column containing row titles */}
        <div className="stage-values-container">
          <div className="title-column">
            {Object.keys(inputLabelNamePairs).map((name) => (
              <p className="stage-details-title-item" key={name}>
                {inputLabelNamePairs[name]}
              </p>
            ))}
          </div>

          {/* Columns containing entered values (optimum, min, max) */}
          {['Optimum', 'Min', 'Max'].map((level) => {
            return (
              <div className={`${level.toLowerCase()}-column`}>
                {Object.keys(inputLabelNamePairs).map((name) => (
                  <label className="stage-details-value-item">
                    {level}:{' '}
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
          <Button className="save-btn" variant="save" onClick={() => null}>
            Save Crop Details
          </Button>
        </div>
      </form>
    </div>
  );
}
