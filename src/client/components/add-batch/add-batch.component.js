import React from 'react';
import FormTitle from '../form-title/form-title.component';
import { Accordion, AccordionItem } from 'react-light-accordion';
import FormField from '../form-field/form-field.component';

import './add-batch.css';

export default function AddBatch() {
  return (
    <>
      <FormTitle title="Add Batch" />

      <div className="addbatch-container">
        <Accordion>
          <AccordionItem title="BATCH DETAILS">
            <br />
            <br />
            <FormField />
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
