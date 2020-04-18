import React from 'react';
import PropTypes from 'prop-types';
// import SidebarMenu from '../../components/side-navigation/sidebar.component';

// import SectionHeader from '../../components/section-header/section-header.component';

import FormTitle from '../../components/form-title/form-title.component';
// import AddBatch from '../../components/add-batch/add-batch.component';
import EditBatchImage from '../../components/edit-batch-image/edit-batch-image.component';
import DeleteBatch from '../../components/delete-confim/batch-delete-button.component';
// import Footer from '../../components/footer/footer.component';

import { Accordion, AccordionItem } from 'react-light-accordion';

import image from '../../assets/images/crop-image.png';
import penImage from '../../assets/images/edit-icon.png';

// import FormField from '../../components/form-field/form-field.component';
// import Input from '../../components/input/input.component';

import './view-batch-detail-page.style.css';
import InputText from '../../components/input-field/input-text.component';
import Button from '../../components/button/button.component';
// import InputDate from '../../components/input-field/input-date.component';

const BatchDetailPage = ({ batchId }) => {
  const handler = () => {
    // console.log('bismillah');
  };
  return (
    <>
      {/* <div>
        <SidebarMenu  />
      </div>   */}
      <div className="batchDetail-wrapper">
        <div className="batch-detail">
          <FormTitle title={`BATCH# ${batchId}`} />

          <Accordion>
            <AccordionItem title="BATCH DETAILS">
              {/* <Input placeholder='Crop Name'type='select'/> */}

              <InputText placeholder="Crop Name" />
              <InputText placeholder="Seeding Date" />
              <InputText placeholder="Number of pots seeded" />
              <InputText placeholder="Customer Name" />
              <Button type="primary" onClick={handler}>
                SAVE BATCH DETAILS
              </Button>
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

        <div className="right-panel">
          <EditBatchImage
            srcPath={image}
            srcPenPath={penImage}
            altText="A crop"
            altIconText="A icon"
          />
          <h3>Happy birth day </h3>
          <h3>To you</h3>
          <DeleteBatch />
        </div>
      </div>
    </>
  );
};

export default BatchDetailPage;

BatchDetailPage.propTypes = {
  batchId: PropTypes.string.isRequired,
};
