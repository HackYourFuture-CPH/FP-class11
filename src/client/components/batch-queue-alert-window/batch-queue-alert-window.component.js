import React from 'react';
import Popup from 'reactjs-popup';
import './batch-queue-alert-window.style.css';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function BatchQueueAlertWindow({
  openState,
  closeAction,
  batchItem,
}) {
  const popupView = () => (
    <PopupModal title="BATCH QUEUED" closeAction={closeAction}>
      <AlertContent batchItem={batchItem}>
        <AlertActions closeAction={closeAction} />
      </AlertContent>
    </PopupModal>
  );

  return (
    <Popup
      open={openState}
      modal
      overlayStyle={{ background: 'rgba(255,255,255,0.7' }}
      contentStyle={{ background: 'none', border: 'none', width: 'auto' }}
    >
      {popupView}
    </Popup>
  );
}

const PopupModal = ({ closeAction, children, title }) => {
  return (
    <div className="modal">
      <button type="submit" className="close" onClick={closeAction}>
        &times;
      </button>
      <div className="header">{title}</div>
      {children}
    </div>
  );
};

const AlertContent = ({ batchItem, children }) => {
  return (
    <>
      <div className="content">
        <p>Batch #{batchItem.id} starts on</p>
        <p>{moment(batchItem.seeding_date).format('DD MMMM YYYY')}</p>
      </div>
      {children}
    </>
  );
};

const AlertActions = ({ closeAction }) => (
  <div className="actions">
    <button type="submit" className="okay" onClick={closeAction}>
      OK
    </button>
  </div>
);

BatchQueueAlertWindow.propTypes = {
  openState: PropTypes.bool.isRequired,
  closeAction: PropTypes.func.isRequired,
  batchItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
AlertActions.propTypes = {
  closeAction: PropTypes.func.isRequired,
};
AlertContent.propTypes = {
  batchItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
PopupModal.propTypes = {
  closeAction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
};
