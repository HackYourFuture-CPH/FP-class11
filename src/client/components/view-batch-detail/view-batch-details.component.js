import React from 'react';
import FormTitle from '../form-title/form-title.component';
import { Accordion, AccordionItem } from 'react-light-accordion';
import FormViewBatchDetails from '../form-view-batch-details/form-view-batch-details.component';
import PropTypes from 'prop-types';

import './view-batch-details.style.css';

export default function ViewBatchDetails({ batch, crop }) {
  return (
    <>
      <FormTitle title={`Batch # ${batch.id}`} />

      <div className="addbatch-container">
        <Accordion>
          <AccordionItem title="BATCH DETAILS">
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

ViewBatchDetails.propTypes = {
  batch: PropTypes.oneOfType([PropTypes.object]).isRequired,
  crop: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
