import React, { useState } from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';

const ChartbarMenu = ({ buttons, defaultSelection }) => {
  const [selectedButton, setSelectedButton] = useState(defaultSelection.id);
  return (
    <div className="chartbar-button-wrapper">
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            type="toggle"
            size="large"
            onClick={() => {
              setSelectedButton(button.id);
            }}
            toggled={selectedButton === button.id}
          >
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

ChartbarMenu.defaultProps = {
  defaultSelection: '',
  buttons: '',
};

ChartbarMenu.propTypes = {
  defaultSelection: PropTypes.oneOfType([PropTypes.object]),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
};

export default ChartbarMenu;
