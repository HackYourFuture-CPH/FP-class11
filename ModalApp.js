import React from 'react';
import './Style.css';
import ModalList from './ModalList';
import Modal from './Modal';

const ModalApp = () => {
  const { isShowing, toggle, approveModal } = Modal();

  return (
    <div>
      <button className="base-btn" onClick={toggle}>
        DELETE CROP
      </button>
      <ModalList
        isShowing={isShowing}
        hide={toggle}
        onApprove={approveModal}
        onClose={toggle}
      />
    </div>
  );
};

export default ModalApp;
