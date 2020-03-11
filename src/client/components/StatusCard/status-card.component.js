import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.component';
import Label from '../label/label.component';

import theme from '../../theme';

export default function StatusCard({
  isOnTime,
  daysToHarvest,
  daysToProjectEnd,
}) {
  const onTime = (
    <Label title="On time" backgroundColor={theme.colors.primary} />
  );
  const delayed = (
    <Label title="Check PH" backgroundColor={theme.colors.danger} />
  );

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
