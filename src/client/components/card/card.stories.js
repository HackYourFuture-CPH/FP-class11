import React from 'react';
import Card from './card.component';

export default { title: 'CardLayouts/Card' };

export const withText = () => <Card>This is a card</Card>;
export const withHTML = () => (
  <Card>
    <h2>Nice card</h2>
    <p>This is a card with some HTML</p>
  </Card>);
