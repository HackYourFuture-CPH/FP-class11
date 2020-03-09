import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.component';
import Label from '../label/label.component';

export default function StatusCard({
  onTime,
  daysToHarvest,
  daysToProjectEnd
}) {
  return (
    <Card>
      <Label title={onTime ? 'on time' : 'delayed'} active={onTime} />
      <ul>
        <li>
          <span>Days left to harvest:</span>
          <span>in {daysToHarvest}</span>
        </li>
        <li>
          <span>Days left to end the project:</span>
          <span>in {daysToProjectEnd}</span>
        </li>
      </ul>
    </Card>
  );
}

StatusCard.propTypes = {
  onTime: PropTypes.bool.isRequired,
  daysToHarvest: PropTypes.number.isRequired,
  daysToProjectEnd: PropTypes.number.isRequired,
};
