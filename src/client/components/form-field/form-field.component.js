import React, { useState } from 'react';
import DropDown from '../drop-down/drop-down.component';
import InputText from '../input-field/input-text.component';
import InputDate from '../input-field/input-date.component';
import Button from '../button/button.component';

import './form-field.css';

const { getTokenWithHeaders } = require('../../firebase/getTokenWithHeaders');

export default function FormField() {
  const [cropName, setCropName] = useState('');
  const [startSeedDate, setStartSeedDate] = useState('');
  const [seedPot, setSeedPot] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const dateTime = new Date(startSeedDate)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    setStartSeedDate(dateTime);
    const headers = await getTokenWithHeaders();
    let userId = await fetch('http://localhost:5000/api/users/id', {
      method: 'GET',
      headers,
    })
      .then((id) => {
        return id.json();
      })
      .catch((error) => {
        return error;
      });
    userId = userId[0].id;

    await fetch('http://localhost:5000/api/create-batch', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        fk_crop_id: cropName,
        fk_user_id: userId,
        customer_name: customerName,
        number_of_seeded_pots: seedPot,
        seeding_date: startSeedDate,
      }),
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        return error;
      });
  };

  const handleDropdown = (e) => {
    setCropName(e.target.value);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
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
