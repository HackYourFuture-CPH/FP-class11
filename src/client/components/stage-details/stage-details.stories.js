import React from 'react';
import StageDetails from './stage-details.component';
import data from './crop_stage_default_values.json';

export default {
  component: StageDetails,
  title: 'Accordion Options',
};

const cropId = 1;

export const StageDetailsComponent = () => {
  const stages = [
    { id: 1, name: 'Seeding' },
    { id: 2, name: 'Propagation' },
    { id: 3, name: 'Maturity' },
    { id: 4, name: 'Harvest' },
  ];

  const levels = ['min', 'optimum', 'max'];

  return (
    <StageDetails cropId={cropId} stages={stages} levels={levels} data={data} />
  );
};
