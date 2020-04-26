import React from 'react';
import DropDown from '../drop-down/drop-down.component';
import InputText from '../input-field/input-text.component';
import InputDate from '../input-field/input-date.component';
import Button from '../button/button.component';
import PropTypes from 'prop-types';

import './form-field.css';

export default function FormField({
  cropId,
  setCropId,
  setStartSeedDate,
  setSeedPot,
  setCustomerName,
  handleSubmit,
}) {
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <DropDown
            data={[
              { value: 1, label: 'Lettuce' },
              { value: 2, label: 'Shiso' },
            ]}
            value={cropId}
            placeholder="Crop Name"
            handleChange={(e) => setCropId(e.target.value)}
          />

          <InputDate
            type="date"
            placeholder="Start Seed Date"
            handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputText
            type="text"
            placeholder="Number of seeded pots"
            handleChange={(e) => setSeedPot(e.target.value)}
          />
          <InputText
            type="text"
            placeholder="Customer Name"
            handleChange={(e) => setCustomerName(e.target.value)}
          />
          <Button type="primary">Save Crop Details</Button>
        </form>
      </div>
    </div>
  );
}

FormField.propTypes = {
  cropId: PropTypes.number.isRequired,
  setCropId: PropTypes.func.isRequired,
  setStartSeedDate: PropTypes.func.isRequired,
  setSeedPot: PropTypes.func.isRequired,
  setCustomerName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
