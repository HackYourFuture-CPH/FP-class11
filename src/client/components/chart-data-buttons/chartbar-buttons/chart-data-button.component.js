import React from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

const ChartbarMenu = ({
  buttons,
  selectedChartButtonId,
  setSelectedChartButtonId,
}) => {
  return (
    <div className="chartbar-button-wrapper">
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            type="toggle"
            size="large"
            onClick={() => {
              setSelectedChartButtonId(button.id);
            }}
            toggled={selectedChartButtonId === button.id}
          >
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

ChartbarMenu.defaultProps = {
  buttons: [],
};

ChartbarMenu.propTypes = {
  selectedChartButtonId: PropTypes.number.isRequired,
  setSelectedChartButtonId: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
};

export default ChartbarMenu;
