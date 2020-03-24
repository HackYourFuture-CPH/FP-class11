import React from 'react';
import Popup from 'reactjs-popup';
import './Logout.style.css';

const userName = 'Servet';

export default function Logout() {
  return (
    <Popup
      trigger={
        <button type="submit" className="logout-button">
          {' '}
          LOG OUT{' '}
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <button type="submit" className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> LOG OUT </div>
          <div className="content">
            <p>
              Hi {userName} <br />
              Do you really want to Logout ?{' '}
            </p>
          </div>
          <div className="actions">
            <button
              className="confirm-logout"
              type="submit"
              onClick="location.href='/login?dis=yes'"
            >
              Logout
            </button>
            <br />
            <button
              type="submit"
              className="confirm-cancel"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
