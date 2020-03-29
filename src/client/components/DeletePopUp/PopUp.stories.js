import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonComponent from './Button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf('DeletePopUp', module);

stories.addDecorator(withKnobs);

const variantOptions = {
  none: '',
  Delete: 'Delete',
  Cancel: 'Cancel',
};

stories.add('DeletePopUp', () => (
  <ButtonComponent
    onClick={action('clicked!')}
    // syntax is (name, options, default)
    variant={select('variant', variantOptions, '')}
    // syntax is (name, default)
    disabled={boolean('disabled', false)}
  >
    Delete
  </ButtonComponent>
));
