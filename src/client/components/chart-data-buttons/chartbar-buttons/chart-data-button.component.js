import React from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

const ChartbarMenu = ({ text, onClick }) => {
  return (
    <div className="chartbar-button-wrapper">
      <Button type="toggle" size="large" onClick={onClick}>
        {text.buttonDays}
      </Button>
      <Button type="toggle" size="large" onClick={onClick}>
        {text.buttonWeek}
      </Button>
      <Button type="toggle" size="large" onClick={onClick}>
        {text.buttondays}
      </Button>
      <Button type="toggle" size="large" onClick={onClick}>
        {text.buttonMonth}
      </Button>
      <Button type="toggle" size="large" onClick={onClick}>
        {text.buttonCustom}
      </Button>
    </div>
  );
};

ChartbarMenu.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChartbarMenu;
