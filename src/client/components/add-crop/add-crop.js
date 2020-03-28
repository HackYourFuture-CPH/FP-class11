import React from 'react';
import FormTitle from '../form-title/form-title';
import { Accordion, AccordionItem } from 'react-light-accordion';
import FormField from '../form-field/form-field';

import './add-crop.css';

export default function AddCrop() {
  return (
    <>
      <FormTitle title="Add Crop" />

      <div className="addcrop-container">
        <Accordion>
          <AccordionItem title="CROP">
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
