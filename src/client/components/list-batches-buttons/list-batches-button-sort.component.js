import React, { useState } from 'react';
import './list-batches-button.style.css';
import PropTypes from 'prop-types';
import Button from '../button/button.component';

const BatchesMenu = ({ buttons, defaultSelection }) => {
  const [selectedButtonId, setSelectedButtonId] = useState(defaultSelection.id);
  return (
    <div className="batches-button-wrapper">
      Sort by:
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            type="toggle"
            size="large"
            onClick={() => {
              setSelectedButtonId(button.id);
            }}
            toggled={selectedButtonId === button.id}
          >
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

BatchesMenu.defaultProps = {
  defaultSelection: {},
  buttons: [],
};

BatchesMenu.propTypes = {
  defaultSelection: PropTypes.oneOfType([PropTypes.object]),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
};

export default BatchesMenu;
