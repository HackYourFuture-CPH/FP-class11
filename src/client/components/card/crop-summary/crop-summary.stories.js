import React from 'react';
import { CardTitle } from '../card-title.component';
import { Status } from '../status/status.component';
import { Summary } from './summary.component';
import { withKnobs, number, date, select } from '@storybook/addon-knobs';

export default { title: 'cards/status', decorators: [withKnobs] };

const moment = require('moment');

const statusLabel = 'Status';
const statusOptions = {
  'Check PH': 1,
  Finished: 2,
  Cancelled: 3,
  'On Time': 4,
  None: null,
};
const defaultStatus = 1;
const stageLabel = 'Stage Name';
const stageOptions = {
  Seeding: 'Seeding',
  Propagation: 'Propagation',
  Maturity: 'Maturity',
  None: null,
};
const defaultStageName = 'CHECK PH';

export const WithKnobs = () => {
  const knobs = {
    harvestDayLeft: number('harvestDayLeft', 7),
    status: select(statusLabel, statusOptions, defaultStatus),
    projDayLeft: number('Project Day Left', 10),
    prodStartDate: date('Project Start Date', new Date()),
    prodEndDate: date('Project End Date', new Date()),
    stageName: select(stageLabel, stageOptions, defaultStageName),
    dayCount: number('Day Count', 53),
  };

  return (
    <div>
      <div className="card-header">
        <CardTitle title="STATUS" />
        <Status stat={knobs.status} />
      </div>
      <Summary
        harvestDayLeft={knobs.harvestDayLeft}
        projDayLeft={knobs.projDayLeft}
        prodStartDate={String(moment(knobs.prodStartDate).format('DD-MM-YYYY'))}
        prodEndDate={String(moment(knobs.prodEndDate).format('DD-MM-YYYY'))}
        stageName={knobs.stageName}
        dayCount={knobs.dayCount}
      />
    </div>
  );
};
