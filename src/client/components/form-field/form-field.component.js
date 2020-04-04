/* eslint-disable no-console */
import React, { useState } from 'react';
import DropDown from '../drop-down/drop-down.component';
import InputText from '../input-field/input-text.component';
import InputDate from '../input-field/input-date.component';
import Button from '../button/button.component';

import './form-field.css';

export default function FormField() {
  const [cropName, setCropName] = useState(null);
  const [startSeedDate, setStartSeedDate] = useState(null);
  const [seedPot, setSeedPot] = useState(null);
  const [customerName, setCustomerName] = useState(null);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(cropName);
      console.log(startSeedDate);
      console.log(seedPot);
      console.log(customerName);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDropdown = (e) => {
    setCropName(e.target.value);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <DropDown
            data={[
              { value: 1, label: 'Lettuce' },
              { value: 2, label: 'Shiso' },
            ]}
            value={cropName}
            placeholder="Crop Name"
            handleChange={handleDropdown}
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
