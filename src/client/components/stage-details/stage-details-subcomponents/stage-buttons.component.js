import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

export default function StageButtons({
  STAGES,
  selectedStageIndex,
  setSelectedStageIndex,
}) {
  return (
    <div className="stage-buttons-container">
      {STAGES.map((stage) => {
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
  );
}

StageButtons.propTypes = {
  STAGES: PropTypes.instanceOf(Array).isRequired,
  selectedStageIndex: PropTypes.number.isRequired,
  setSelectedStageIndex: PropTypes.func.isRequired,
};
