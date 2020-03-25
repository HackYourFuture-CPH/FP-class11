import React from 'react';
import Button from '../button/button.component';
import './Style.css';
import ModalList from './ModalList.component';
import Modal from './Modal';

const App = () => {
  const { isShowing, toggle } = Modal();
  return (
    <div>
      <Button className="base-btn" type="danger" onClick={toggle}>
        Delete crop
      </Button>
      <ModalList isShowing={isShowing} hide={toggle} onClose={toggle} />
    </div>
  );
};

export default App;
