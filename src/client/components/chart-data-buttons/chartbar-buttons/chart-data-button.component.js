import React, { useState } from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

const ChartbarMenu = ({ buttonLabel }) => {
  const [selectedButton, setSelectedButton] = useState(buttonLabel.buttonWeek);
  return (
    <div className="chartbar-button-wrapper">
      {buttonLabel.map((obj) => {
        return (
          <Button
            type="toggle"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              setSelectedButton(obj.buttonId);
            }}
            toggled={selectedButton === obj.buttonId}
          >
            {obj.buttonLabel}
          </Button>
        );
      })}
    </div>
  );
};

ChartbarMenu.propTypes = {
  buttonLabel: PropTypes.instanceOf(Array).isRequired,
};

export default ChartbarMenu;
