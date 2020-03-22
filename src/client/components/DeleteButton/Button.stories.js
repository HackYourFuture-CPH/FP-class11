import React from 'react';
import { storiesOf } from '@storybook/react';

import App from './App';

storiesOf('Button', module).add('with text', () => <App label="Continue" />);
