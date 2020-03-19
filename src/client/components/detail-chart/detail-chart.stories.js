import React from 'react';
import DetailChart from './detail-chart.component';
import data from './lettuce.json';

export default { title: 'Charts/Detail Chart' };

export const withRangeBar = () => <DetailChart data={data} />;
