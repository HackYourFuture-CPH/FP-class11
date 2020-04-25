import React from 'react';

import InputOutputText from '../input-output-field/input-output-text.component';
import InputOutputDate from '../input-output-field/input-output-date.component';

import Button from '../button/button.component';
import PropTypes from 'prop-types';
import './form-view-batch-details.style.css';

export default function FormViewBatchDetails({ batch, crop }) {
  // const [cropName, setCropName] = useState(value);
  // const [setStartSeedDate] = useState('');
  // const [setSeedPot] = useState('');
  // const [customerName,setCustomerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleDropdown = (e) => {
  //   setCropName(e.target.value);
  // };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <InputOutputText
            type="text"
            placeholder="crop name"
            value={crop.name}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />

          <InputOutputDate
            type="date"
            placeholder="Start Seed Date"
            value={batch.seeding_date}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputOutputText
            type="number"
            placeholder="number of seeded pots"
            value={batch.number_of_seeded_pots}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputOutputText
            type="text"
            placeholder="Cuttomer name"
            value={batch.customer_name}
            // handleChange={(e) => setCustomerName(e.target.value)}
          />
          <Button type="primary">Save Batch Details</Button>
        </form>
      </div>
    </div>
  );
}

FormViewBatchDetails.propTypes = {
  crop: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
};
