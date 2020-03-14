import React, { useState } from 'react';
import './FormField.css';
import InputText from '../Input/InputText';
import InputDate from '../Input/InputDate';
import Button from '../Button/Button';

function FormField() {
  const [plantVariety, setPlantVariety] = useState(null);
  const [seedPot, setSeedPot] = useState(null);
  const [startSeedDate, setStartSeedDate] = useState(null);
  const [harvestSeedDate, setHarvestSeedDate] = useState(null);
  const [customerName, setCustomerName] = useState(null);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log('hi');
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
        <form onSubmit={handleSubmit.bind(this)}>
          <InputText
            type="text"
            placeholder="Name plant variety"
            handleInputChange={(e) => setPlantVariety(e.target.value)}
          />
          <br />
          <InputText
            type="text"
            placeholder="Number of seeded pots"
            handleInputChange={(e) => setSeedPot(e.target.value)}
          />
          <br />
          <InputDate
            type="text"
            placeholder="Start Seed Date"
            handleInputChange={(e) => setStartSeedDate(e.target.value)}
          />
          <br />
          <InputDate
            type="date"
            placeholder="Harvest Date"
            handleInputChange={(e) => setHarvestSeedDate(e.target.value)}
          />
          <br />
          <InputText
            type="text"
            placeholder="Customer Name"
            handleInputChange={(e) => setCustomerName(e.target.value)}
          />
          <br />

          <Button type="submit" placeholder="Save Crop Details" />
        </form>
      </div>
    </div>
  );
}
export default FormField;
