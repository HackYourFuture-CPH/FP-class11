import React from 'react';
import { number, date, text } from '@storybook/addon-knobs';
import { CropSummary } from './crop-summary-card/crop-summary-card.component';

const moment = require('moment');

export default { title: 'Cards' };
export const defaultCard = () => {
  const knobs = {
    harvestDayLeft: number('harvestDayLeft', 7),
    projDayLeft: number('Project Day Left', 10),
    prodStartDate: date('Project Start Date', new Date()),
    prodEndDate: date('Project End Date', new Date()),
    stageName: text('Stage', 'Seeding'),
    dayCount: number('Day Count', 13),
  };

  return (
    <CropSummary
      harvestDayLeft={knobs.harvestDayLeft}
      projDayLeft={knobs.projDayLeft}
      prodStartDate={String(moment(knobs.prodStartDate).format('DD-MM-YYYY'))}
      prodEndDate={String(moment(knobs.prodEndDate).format('DD-MM-YYYY'))}
      stageName={knobs.stageName}
      dayCount={knobs.dayCount}
    />
  );
};
