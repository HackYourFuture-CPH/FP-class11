import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('Save Crop Details', () => (
  <div>
    <Button
      className="Button-class"
      type="submit"
      placeholder="save crop details"
    ></Button>
  </div>
));
