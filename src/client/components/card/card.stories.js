import React from 'react';
import Card from './Card.component';
import { CropSummary } from './CropSummary/CropSummary.component';

export default { title: 'Cards' };

export const defaultCard = () => (
  <Card>
    <CropSummary />
  </Card>
);
