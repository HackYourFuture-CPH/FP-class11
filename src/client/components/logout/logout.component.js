import React from 'react';
import Popup from 'reactjs-popup';
import './logout.style.css';
import PropTypes from 'prop-types';

export default function Logout({
  userName,
  openState,
  closeAction,
  logoutFunc,
}) {
  const popupView = () => (
    <PopupModal title="LOG OUT" closeAction={closeAction}>
      <LogoutContent userName={userName}>
        <LogoutActions closeAction={closeAction} logoutFunc={logoutFunc} />
      </LogoutContent>
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

const LogoutContent = ({ userName, children }) => {
  return (
    <>
      <div className="modal-content">
        <p>Hi {userName}</p>
        <p>Do you really want to log out?</p>
      </div>
      {children}
    </>
  );
};

const LogoutActions = ({ closeAction, logoutFunc }) => (
  <div className="actions">
    <button className="confirm-logout" type="submit" onClick={logoutFunc}>
      Logout
    </button>
    <br />
    <button type="submit" className="confirm-cancel" onClick={closeAction}>
      Cancel
    </button>
  </div>
);

Logout.propTypes = {
  userName: PropTypes.string.isRequired,
  openState: PropTypes.bool.isRequired,
  closeAction: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired,
};
LogoutActions.propTypes = {
  closeAction: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired,
};
LogoutContent.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
PopupModal.propTypes = {
  closeAction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
};
