import React from 'react';
import PropTypes from 'prop-types';

import ValueInput from './value-input.component';

export default function DefaultValuesColumns({
  selectedStageIndex,
  PARAMETERS,
  dataForStage,
  stages,
  handleValueInput,
  levels,
}) {
  return (
    <>
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
                <ValueInput
                  selectedStageIndex={selectedStageIndex}
                  level={level}
                  parameter={parameter}
                  handleValueInput={handleValueInput}
                  title={title}
                  value={value}
                  name={name}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

DefaultValuesColumns.propTypes = {
  selectedStageIndex: PropTypes.number.isRequired,
  PARAMETERS: PropTypes.instanceOf(Object).isRequired,
  dataForStage: PropTypes.instanceOf(Array).isRequired,
  handleValueInput: PropTypes.func.isRequired,
  levels: PropTypes.instanceOf(Array).isRequired,
  stages: PropTypes.instanceOf(Array).isRequired,
};
