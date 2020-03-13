import React from 'react';
import DetailChart from './detail-chart.component';
import { storiesOf } from '@storybook/react';

storiesOf('Charts', module).add('Detail Chart', () => {
  return (
    <>
      <DetailChart />
    </>
  );
});
