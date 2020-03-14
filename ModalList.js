import React from 'react';
import ReactDOM from 'react-dom';

const ModalList = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
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
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </span>
            </div>
            <div className="modal">
              <h4>DELETE CROP</h4>
              <p className="p1">Are you sure?</p>
              <p className="P2">Do you really want to delete the crop?</p>
              <button className="btn-delete" type="button">
                <p className="text-btn">DELETE</p>
              </button>
              <button className="btn-cancel" type="button">
                <p className="text-cancel">CANCEL</p>
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default ModalList;
