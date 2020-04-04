/* eslint-disable no-console */
import React, { useState } from 'react';
import InputText from '../input-field/input-text.component';
import InputDate from '../input-field/input-date.component';
import Button from '../button/button.component';

import './form-field.css';

export default function FormField() {
  const [plantVariety, setPlantVariety] = useState(null);
  const [seedPot, setSeedPot] = useState(null);
  const [startSeedDate, setStartSeedDate] = useState(null);
  const [harvestSeedDate, setHarvestSeedDate] = useState(null);
  const [customerName, setCustomerName] = useState(null);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(plantVariety);
      console.log(seedPot);
      console.log(startSeedDate);
      console.log(harvestSeedDate);
      console.log(customerName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <InputText
            type="text"
            placeholder="Name plant variety"
            handleChange={(e) => setPlantVariety(e.target.value)}
          />
          <InputText
            type="text"
            placeholder="Number of seeded pots"
            handleChange={(e) => setSeedPot(e.target.value)}
          />
          <InputDate
            type="date"
            placeholder="Start Seed Date"
            handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputDate
            type="date"
            placeholder="Harvest Date"
            handleChange={(e) => setHarvestSeedDate(e.target.value)}
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
