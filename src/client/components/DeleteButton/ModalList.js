import React from 'react';
import ReactDOM from 'react-dom';

const ModalList = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-header">
              <span
                type="button"
                className="modal-close-button"
                aria-label="Close"
                onClick={hide}
                aria-hidden="true"
              >
                &times;
              </span>
            </div>
            <div className="modal">
              <h4 className="modal-headline">DELETE CROP</h4>
              <p className="p1">Are you sure?</p>
              <p className="p2">Do you really want to delete the crop?</p>
              <button className="btn-delete" type="button">
                <p className="text-btn-delete">DELETE</p>
              </button>
              <button className="btn-cancel" type="button">
                <p className="text-btn-cancel">CANCEL</p>
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

export default ModalList;
