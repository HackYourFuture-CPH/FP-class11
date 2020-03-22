import React from 'react';
import Card from './card.component';
import { CropSummary } from './CropSummary/crop-summary.component';

export default { title: 'Cards' };

export const defaultCard = () => (
  <Card>
    <CropSummary />
  </Card>
);
