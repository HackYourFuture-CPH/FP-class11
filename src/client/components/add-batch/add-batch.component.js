import React from 'react';
import FormTitle from '../form-title/form-title.component';
import { Accordion, AccordionItem } from 'react-light-accordion';
import FormField from '../form-field/form-field.component';
import PropTypes from 'prop-types';

import './add-batch.css';

export default function AddBatch({
  cropId,
  setCropId,
  setStartSeedDate,
  setSeedPot,
  setCustomerName,
  handleSubmit,
}) {
  return (
    <>
      <FormTitle title="Add Batch" />

      <div className="addbatch-container">
        <Accordion>
          <AccordionItem title="BATCH DETAILS">
            <br />
            <br />
            <FormField
              cropId={cropId}
              setCropId={setCropId}
              setStartSeedDate={setStartSeedDate}
              setSeedPot={setSeedPot}
              setCustomerName={setCustomerName}
              handleSubmit={handleSubmit}
            />
          </AccordionItem>

          <AccordionItem title="STAGE DETAILS">
            <FormTitle title="Section under development" />
          </AccordionItem>

          <AccordionItem title="TRAYS AND TANKS">
            <FormTitle title="Section under development" />
          </AccordionItem>

          <AccordionItem title="COSTS">
            <FormTitle title="Section under development" />
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

AddBatch.propTypes = {
  cropId: PropTypes.number.isRequired,
  setCropId: PropTypes.func.isRequired,
  setStartSeedDate: PropTypes.func.isRequired,
  setSeedPot: PropTypes.func.isRequired,
  setCustomerName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
