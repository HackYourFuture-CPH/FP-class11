import React from 'react';
import Card from './card.component';
import { CropSummary } from './crop-summary/crop-summary.component';

export default { title: 'Cards' };

export const defaultCard = () => (
  <Card>
    <CropSummary />
  </Card>
);
