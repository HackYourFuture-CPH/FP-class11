import React from 'react';
import Button from '../button/button.component';
import './Style.css';
import ModalList from './ModalList.component';
import Modal from './Modal';

const ButtonComponent = () => {
  const { isShowing, toggle } = Modal();
  return (
    <div>
      <Button className="base-btn" type="danger" onClick={toggle}>
        Delete BATCH
      </Button>
      <ModalList isShowing={isShowing} hide={toggle} onClose={toggle} />
    </div>
  );
};

export default ButtonComponent;
