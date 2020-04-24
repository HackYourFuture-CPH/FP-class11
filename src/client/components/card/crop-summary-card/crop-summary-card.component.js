import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card.component';
import { CardTitle } from '../card-title.component';
// import { Status } from '../status-card/status-card.component';
import { Content } from '../card-content.component';
import { Summary } from './summary-card.component';
import './crop-summary-card.style.css';

export const CropSummary = ({
  harvestDayLeft,
  projDayLeft,
  prodStartDate,
  prodEndDate,
  stageName,
  dayCount,
}) => {
  return (
    <Card>
      <div className="card-header">
        <CardTitle title="STATUS" />
        {/* <Status stat={stat} /> */}
      </div>
      <Content>
        <Summary
          harvestDayLeft={harvestDayLeft}
          projDayLeft={projDayLeft}
          prodStartDate={prodStartDate}
          prodEndDate={prodEndDate}
          stageName={stageName}
          dayCount={dayCount}
        />
      </Content>
    </Card>
  );
};

CropSummary.defaultProps = {
  harvestDayLeft: 0,
  projDayLeft: 0,
  dayCount: 0,
};

CropSummary.propTypes = {
  harvestDayLeft: PropTypes.number,
  projDayLeft: PropTypes.number,
  prodStartDate: PropTypes.string.isRequired,
  prodEndDate: PropTypes.string.isRequired,
  stageName: PropTypes.string.isRequired,
  dayCount: PropTypes.number,
};
