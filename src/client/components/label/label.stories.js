import React from 'react';
import Label from './label.component';

export default { title: 'Label' };

export const OnTime = () => <Label title="On time" className="label-primary" />;

export const checkPH = () => (
  <Label title="Check PH" className="label-danger" />
);

export const delayed = () => (
  <Label title="Delayed" className="label-interaction" />
);

export const defaultProps = () => <Label title="Default color" />;
