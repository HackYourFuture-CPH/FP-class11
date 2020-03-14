import React from 'react';
import { storiesOf } from '@storybook/react';
import { CropSummaryCard } from './crop-summary-card.component';

storiesOf('CropSummaryCard', module).add('Crop Status Card - On Time', () => {
  return <CropSummaryCard stat={1} />;
});

storiesOf('CropSummaryCard', module).add('Crop Status Card - Check-ph', () => {
  return <CropSummaryCard stat={2} />;
});

storiesOf('CropSummaryCard', module).add('Crop Status Card - Check-ph', () => {
  return <CropSummaryCard stat={3} />;
});

// default could be any value
storiesOf('CropSummaryCard', module).add('Crop Status Card - Check-ph', () => {
  return <CropSummaryCard stat={4} />;
});
