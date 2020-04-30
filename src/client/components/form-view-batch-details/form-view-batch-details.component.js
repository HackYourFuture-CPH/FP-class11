import React from 'react';

import InputOutputText from '../input-output-field/input-output-text.component';
import InputOutputDate from '../input-output-field/input-output-date.component';

import Button from '../button/button.component';
import PropTypes from 'prop-types';
import './form-view-batch-details.style.css';

export default function FormViewBatchDetails({ batch, crop }) {
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
            placeholder="Crop name"
            value={crop.name}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />

          <InputOutputDate
            type="date"
            placeholder="Start seed date"
            value={batch.seeding_date.slice(0, 10)}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputOutputText
            type="number"
            placeholder="Number of seeded pots"
            value={batch.number_of_seeded_pots}
            // handleChange={(e) => setStartSeedDate(e.target.value)}
          />
          <InputOutputText
            type="text"
            placeholder="Customer name"
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
  crop: PropTypes.instanceOf(Object).isRequired,
  batch: PropTypes.instanceOf(Object).isRequired,
};
