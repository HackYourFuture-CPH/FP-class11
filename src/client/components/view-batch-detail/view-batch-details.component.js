import React from 'react';
import FormTitle from '../form-title/form-title.component';
import { Accordion, AccordionItem } from 'react-light-accordion';
import FormViewBatchDetails from '../form-view-batch-details/form-view-batch-details.component';
import PropType from 'prop-types';

import './view-batch-details.style.css';

export default function ViewBatchDetails({batch,crop}) {
  // const batchId = 1;
  // const batch= {
  //   seeding_date: '2020-06-01',
  //   number_of_seeded_pots: '1500',
  //   customer_name: 'Netto',
  // };
  // const crop= {
  //   name: 'Cucumber',
  // };

   
  return (
    <>
      <FormTitle title={`Batch # ${batch.id}`} />

      <div className="addbatch-container">
        <Accordion>
          <AccordionItem title="BATCH DETAILS">
            <br />
            <br />
            <FormViewBatchDetails batch={batch} crop={crop} />
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

ViewBatchDetails.propTypes={
  batch:PropType.string.isRequired,
  crop:PropType.string.isRequired,
}