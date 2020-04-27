import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../button/button.component';

const ModalList = ({ setIsShowing, onDelete }) => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <span
              type="button"
              className="modal-close-button"
              aria-label="Close"
              onClick={() => setIsShowing(false)}
              aria-hidden="true"
            >
              &times;
            </span>
            <div className="items-wrapper">
              <h4 className="text-headline">DELETE BATCH</h4>
              <p>Are you sure?</p>
              <p>Do you really want to delete the batch?</p>
              <div className="buttons-wrapper">
                <Button type="danger" size="large" onClick={onDelete}>
                  Delete
                </Button>
                <Button
                  type="secondary"
                  size="large"
                  onClick={() => setIsShowing(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
ModalList.propTypes = {
  setIsShowing: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ModalList;
