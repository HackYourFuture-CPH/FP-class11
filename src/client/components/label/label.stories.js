import React from 'react';
import Label from './label.component';

export default { title: 'Label' };

export const active = () => <Label title="An active label" active={true} />;
export const inactive = () => <Label title="An inactive label" active={false} />;
