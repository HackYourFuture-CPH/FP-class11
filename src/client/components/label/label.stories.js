import React from 'react';
import Label from './label.component';
import theme from '../../theme';
export default { title: 'Label' };

export const OnTime = () => (
  <Label title="On time" backgroundColor={theme.colors.primary} />
);

export const checkPH = () => (
  <Label title="Check PH" backgroundColor={theme.colors.danger} />
);

export const delayed = () => (
  <Label title="Delayed" backgroundColor={theme.colors.danger} />
);
