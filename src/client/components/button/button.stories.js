import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Button from './button.component';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

const label = 'Variant';
const options = {
  Save: 'save',
  'Delete Crop': 'delete-crop',
  'Export Data': 'export',
  'Log out': 'logout',
  Delete: 'delete',
  Cancel: 'cancel',
  Toggle: 'toggle',
};
const defaultVariant = 'save';

const btnText = {
  save: 'Save Crop Details',
  'delete-crop': 'Delete Crop',
  export: 'Export data ▼',
  logout: 'Log Out',
  delete: 'Delete',
  cancel: 'Cancel',
  toggle: 'Harvest',
};

export const ButtonsAll = () => {
  const variant = select(label, options, defaultVariant);
  return (
    <div style={{ padding: '1em' }}>
      <p>Note: Change button type using knobs</p>
      <hr style={{ margin: '1em' }} />
      <Button variant={variant} onClick={action('clicked')}>
        {variant === 'toggle' ? text('Label', 'Harvest') : btnText[variant]}
      </Button>
      <hr style={{ margin: '1em' }} />
      <pre>{`<Button variant="${variant}" onClick={handleClick}>${
        variant === 'toggle' ? text('Label', 'Harvest') : btnText[variant]
      }</Button>`}</pre>
    </div>
  );
};
