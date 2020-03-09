import React from 'react';
import StatusCard from './status-card.component';
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

export default { title: 'CardLayouts/Status Card', decorators: [withKnobs] };

export const WithKnobs = () => <StatusCard onTime={boolean('On time?', true)} daysToHarvest={number('Days to harvest', 42)} daysToProjectEnd={number('Project end', 53)}>This is a card</StatusCard>;
