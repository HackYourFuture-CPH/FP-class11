import React from 'react';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import Accordion from '../Accordion/Accordion';
import AccordItem from '../Accordion/AccordionItem';
import '../Accordion/Accordion.css';

function AddCrop() {
  return (
    <>
      <FormTitle title="Add Crop" />

      <div>
        <Accordion>
          <AccordItem title="CROP">
            <br />
            <br />
            <FormField />
          </AccordItem>

          <AccordItem title="STAGE DETAILS">
            <FormTitle title="Section under development" />
          </AccordItem>

          <AccordItem title="TRAYS AND TANKS">
            <FormTitle title="Section under development" />
          </AccordItem>

          <AccordItem title="COSTS">
            <FormTitle title="Section under development" />
          </AccordItem>
        </Accordion>
      </div>
    </>
  );
}
export default AddCrop;
