import React from 'react';
import PropTypes from 'prop-types';
import './status-card.style.css';

export const Status = ({ stat }) => {
  let classname;
  let msg;

  switch (stat) {
    case 1:
      msg = 'CHECK PH';
      classname = 'check-ph';
      break;
    case 2:
      msg = 'FINISHED';
      classname = 'finished';
      break;
    case 3:
      msg = 'CANCELLED';
      classname = 'cancelled';
      break;
    default:
      msg = 'on time';
      classname = 'on-time';
      break;
  }

  return <div className={`status ${classname}`}>{msg}</div>;
};

Status.defaultProps = {
  stat: 0,
};
Status.propTypes = {
  stat: PropTypes.number,
};
