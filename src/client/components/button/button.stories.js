import React from 'react';
import Button from './button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const label = 'Example';
const options = {
  Save: 'save',
  'Delete Crop': 'delete-crop',
  'Export Data': 'export',
  Login: 'login',
  'Log out': 'logout',
  Delete: 'delete',
  Cancel: 'cancel',
  Toggle: 'toggle',
};

const defaultExample = 'save';

const btnDetails = {
  save: { text: 'Save Crop Details', type: 'primary' },
  'delete-crop': { text: 'Delete Crop', type: 'danger' },
  export: { text: 'Export data ▾', type: 'primary' },
  login: { text: 'Login', type: 'primary', size: 'large' },
  logout: { text: 'Log Out', type: 'danger', size: 'large' },
  delete: { text: 'Delete', type: 'danger', size: 'large' },
  cancel: { text: 'Cancel', type: 'secondary', size: 'large' },
  toggle: { text: 'Harvest', type: 'toggle' },
};

export const ButtonsAll = () => {
  const variant = select(label, options, defaultExample);

  return (
    <div style={{ padding: '1em' }}>
      <p>Note: Change between examples using knobs</p>
      <hr style={{ margin: '1em' }} />

      <Button
        type={btnDetails[variant].type}
        size={btnDetails[variant].size ? btnDetails[variant].size : ''}
        onClick={action('clicked')}
      >
        {variant === 'toggle'
          ? text('Label', 'Harvest')
          : btnDetails[variant].text}
      </Button>

      <hr style={{ margin: '1em' }} />
      <pre style={{ fontFamily: 'Lucida Console' }}>{`<Button type="${
        btnDetails[variant].type
      }" ${
        btnDetails[variant].size ? 'size="large"' : ''
      } onClick={handleClick}>${
        variant === 'toggle'
          ? text('Label', 'Harvest')
          : btnDetails[variant].text
      }</Button>`}</pre>
    </div>
  );
};
