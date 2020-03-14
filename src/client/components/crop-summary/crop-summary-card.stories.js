import React from 'react';
import { CropSummaryCard } from './crop-summary-card.component';

export default { title: 'Crop Summary' };

export const onTime = () => <CropSummaryCard stat={1} />;
export const checkPh = () => <CropSummaryCard stat={2} />;
