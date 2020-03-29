import React from 'react';
import PropTypes from 'prop-types';

export default function LabelsColumn({ PARAMETERS }) {
  const parametersArray = Object.keys(PARAMETERS);
  return (
    <div className="title-column">
      {parametersArray.map((param) => (
        <p className="stage-details-title-item" key={param}>
          {PARAMETERS[param]}
        </p>
      ))}
    </div>
  );
}

LabelsColumn.propTypes = {
  PARAMETERS: PropTypes.instanceOf(Array).isRequired,
};
