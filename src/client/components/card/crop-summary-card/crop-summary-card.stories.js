import React from 'react';
import { CardTitle } from '../card-title.component';
// import { Status } from '../status-card/status-card.component';
import { Summary } from './summary-card.component';
import { withKnobs, number, date, text } from '@storybook/addon-knobs';
import moment from 'moment';

export default { title: 'Cards/Status', decorators: [withKnobs] };

export const WithKnobs = () => {
  const knobs = {
    harvestDayLeft: number('harvestDayLeft', 7),
    projDayLeft: number('Project Day Left', 14),
    prodStartDate: date('Project Start Date', new Date()),
    prodEndDate: date('Project End Date', new Date()),
    stageName: text('Stage', 'Seeding'),
    dayCount: number('Day Count', 13),
  };

  return (
    <div className="card">
      <div className="card-header">
        <CardTitle title="STATUS" />
        {/* <Status stat={knobs.status} /> */}
      </div>
      <Summary
        harvestDayLeft={knobs.harvestDayLeft}
        projDayLeft={knobs.projDayLeft}
        prodStartDate={String(moment(knobs.prodStartDate).format('DD-MM-YYYY'))}
        prodEndDate={String(
          moment(knobs.prodEndDate)
            .add(17, 'days')
            .format('DD-MM-YYYY'),
        )}
        stageName={knobs.stageName}
        dayCount={knobs.dayCount}
      />
    </div>
  );
};
