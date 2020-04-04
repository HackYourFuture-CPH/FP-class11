import React, { useState, useEffect } from 'react';
import Card from '../card.component';
import { CardTitle } from '../card-title.component';
import { Status } from '../status-card/status-card.component';
import { Content } from '../card-content.component';
import { Summary } from './summary-card.component';
import './crop-summary-card.style.css';

const moment = require('moment');

moment().format();

export const CropSummary = () => {
  const currentDate = moment();
  const harvestDate = moment({
    y: 2020,
    M: 3,
    d: 24,
    h: currentDate.hours(),
    m: currentDate.minutes(),
  });

  const projectDate = moment('2020-04-29');
  const prodStartDate = '12/01/2020';
  const prodEndDate = '11/03/2020';
  const stageName = 'Seeding';
  const dayCount = 2;

  const harvestDuration = moment.duration(harvestDate.diff(currentDate));
  const [harvestDayLeft, setharvestDayLeft] = useState(0);

  const projDuration = moment.duration(projectDate.diff(currentDate));
  const [projDayLeft, setprojDayLeft] = useState(0);

  const stat = 1;

  useEffect(() => {
    setharvestDayLeft(
      Math.floor(harvestDuration.asDays(harvestDuration.asMilliseconds())),
    );
    setprojDayLeft(
      Math.floor(projDuration.asDays(projDuration.asMilliseconds())),
    );
  }, [harvestDuration, projDuration]);

  return (
    <Card>
      <div className="card-header">
        <CardTitle title="STATUS" />
        <Status stat={stat} />
      </div>
      <Content>
        <Summary
          harvestDayLeft={harvestDayLeft}
          projDayLeft={projDayLeft}
          prodStartDate={prodStartDate}
          prodEndDate={prodEndDate}
          stageName={stageName}
          dayCount={dayCount}
        />
      </Content>
    </Card>
  );
};
