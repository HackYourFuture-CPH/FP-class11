import React from 'react';
import Page from './page-detail-chart.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Pages/Page with detail chart',
  decorators: [withKnobs],
};

export const WithKnobs = () => {
  const knobs = {
    pageTitle: text('Title', 'Humidity graph detail'),
  };
  return <Page pageTitle={knobs.pageTitle} />;
};
