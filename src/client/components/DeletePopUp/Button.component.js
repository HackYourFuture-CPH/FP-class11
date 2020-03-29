import React from 'react';
import Button from '../button/button.component';
import './Style.css';
import ModalList from './ModalList.component';
import Modal from './Modal';

const ButtonComponent = () => {
  const { isShowing, toggle, children } = Modal();
  return (
    <div>
      <Button className="base-btn" type="danger" onClick={toggle}>
        {children}Delete crop
      </Button>
      <ModalList isShowing={isShowing} hide={toggle} onClose={toggle} />
    </div>
  );
};

export default ButtonComponent;
