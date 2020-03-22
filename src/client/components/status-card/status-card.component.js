import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.component';
import Label from '../label/label.component';

export default function StatusCard({
  isOnTime,
  daysToHarvest,
  daysToProjectEnd,
}) {
  const onTime = <Label title="On time" className="label-primary" />;
  const delayed = <Label title="Check PH" className="label-danger" />;

  return (
    <Card>
      {isOnTime ? onTime : delayed}
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
  isOnTime: PropTypes.bool.isRequired,
  daysToHarvest: PropTypes.number.isRequired,
  daysToProjectEnd: PropTypes.number.isRequired,
};
