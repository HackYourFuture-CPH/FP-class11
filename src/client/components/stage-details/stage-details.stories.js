import React from 'react';
import StageDetails from './stage-details.component';
import data from './crop_stage_default_values.json';

export default {
  component: StageDetails,
  title: 'Accordion Options',
};

export const StageDetailsComponent = () => {
  return <StageDetails data={data} onChange={() => null} />;
};
