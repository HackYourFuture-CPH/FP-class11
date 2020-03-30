import React from 'react';
import PropTypes from 'prop-types';

export default function SensorValueInput({
  sensorName,
  sensorLevel,
  sensorValue,
  onChange,
  name,
}) {
  return (
    <label className="stage-details-value-item">
      {sensorLevel}:
      <input
        className="stage-value-input"
        type="text"
        pattern="^[0-9]+([,.][0-9]+)?$"
        value={sensorValue || ''}
        onChange={(e) => onChange(e, sensorLevel, sensorName)}
        name={name}
        title={name.split('-').join(' ')}
      />
    </label>
  );
}

SensorValueInput.propTypes = {
  sensorName: PropTypes.string.isRequired,
  sensorLevel: PropTypes.string.isRequired,
  sensorValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
