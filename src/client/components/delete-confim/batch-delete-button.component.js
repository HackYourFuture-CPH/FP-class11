import React, { useState } from 'react';
import Button from '../button/button.component';
import './modal-list-style.css';
import ModalList from './modal-list.component';

const DeleteBatchButton = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => setIsShowing(!isShowing);

  return (
    <div>
      <Button type="danger" onClick={toggle}>
        Delete BATCH
      </Button>
      {isShowing ? (
        <ModalList setIsShowing={setIsShowing} onDelete={() => null} />
      ) : null}
    </div>
  );
};

export default DeleteBatchButton;
