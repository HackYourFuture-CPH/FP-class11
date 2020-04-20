import React from 'react';
import PropTypes from 'prop-types';
import './drop-down.css';

export default function DropDown({ value, handleChange, placeholder, data }) {
  return (
    <div className="select-wrapper">
      <select value={value} onChange={handleChange}>
        <option value="0">{placeholder}</option>
        {data &&
          data.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}
DropDown.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf.isRequired,
};
DropDown.defaultProps = {
  value: '',
  placeholder: 'Select CropName',
};
