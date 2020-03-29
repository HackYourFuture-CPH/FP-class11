import React from 'react';
import PropTypes from 'prop-types';

export default function ValueInput({
  selectedStageIndex,
  level,
  parameter,
  handleValueInput,
  title,
  value,
  name,
}) {
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
        onChange={(e) => handleValueInput(e, level, parameter)}
      />
    </label>
  );
}

ValueInput.propTypes = {
  selectedStageIndex: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  parameter: PropTypes.string.isRequired,
  handleValueInput: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
