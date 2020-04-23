import React from 'react';
import BatchesMenu from './list-batches-button-sort.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'Batches-Buttons',
  component: BatchesMenu,
  decorators: [withKnobs],
};

const label = 'value';
const defaultValue = [
  { id: 1, label: 'Customer Name' },
  { id: 2, label: 'Seeding Date' },
];

export const BatchesButtonsSort = () => {
  const value = object(label, defaultValue);
  return <BatchesMenu buttons={value} defaultSelection={{ id: 2 }} />;
};
