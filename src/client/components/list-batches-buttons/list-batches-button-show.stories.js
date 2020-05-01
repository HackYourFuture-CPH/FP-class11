import React from 'react';
import BatchesMenu from './list-batches-button-show.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'Batches-Buttons',
  component: BatchesMenu,
  decorators: [withKnobs],
};

const label = 'value';
const defaultValue = [
  { id: 1, label: 'Active Batches' },
  { id: 2, label: 'All Batches' },
];

export const BatchesButtonsShow = () => {
  const value = object(label, defaultValue);
  return <BatchesMenu buttons={value} defaultSelection={{ id: 2 }} />;
};
