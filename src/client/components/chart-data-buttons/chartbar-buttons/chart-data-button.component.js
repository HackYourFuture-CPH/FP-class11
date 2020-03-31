import React, { useState } from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

const ChartbarMenu = ({ buttonLabel }) => {
  const [selectedButton, setSelectedButton] = useState(buttonLabel.buttonWeek);
  return (
    <div className="chartbar-button-wrapper">
      <Button
        type="toggle"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setSelectedButton(buttonLabel.buttonDays);
        }}
        toggled={selectedButton === buttonLabel.buttonDays}
      >
        {buttonLabel.buttonDays}
      </Button>
      <Button
        type="toggle"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setSelectedButton(buttonLabel.buttonWeek);
        }}
        toggled={selectedButton === buttonLabel.buttonWeek}
      >
        {buttonLabel.buttonWeek}
      </Button>
      <Button
        type="toggle"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setSelectedButton(buttonLabel.buttonWeeks);
        }}
        toggled={selectedButton === buttonLabel.buttonWeeks}
      >
        {buttonLabel.buttonWeeks}
      </Button>
      <Button
        type="toggle"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setSelectedButton(buttonLabel.buttonMonth);
        }}
        toggled={selectedButton === buttonLabel.buttonMonth}
      >
        {buttonLabel.buttonMonth}
      </Button>
      <Button
        type="toggle"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setSelectedButton(buttonLabel.buttonCustom);
        }}
        toggled={selectedButton === buttonLabel.buttonCustom}
      >
        {buttonLabel.buttonCustom}
      </Button>
    </div>
  );
};

ChartbarMenu.propTypes = {
  buttonLabel: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ChartbarMenu;
