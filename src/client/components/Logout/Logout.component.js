import React from 'react';
import Popup from 'reactjs-popup';
import './Logout.style.css';

export default function Logout() {
  return (
    <Popup
      trigger={
        <button type="submit" className="Logbutton">
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
              Hi Servet <br />
              Do you really want to Logout ?{' '}
            </p>
          </div>
          <div className="actions">
            <button className="ConfirmLogout" type="submit">
              Logout
            </button>
            <br />
            <button
              type="submit"
              className="ConfirmCancel"
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
