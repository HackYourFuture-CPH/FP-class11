import React from 'react';
import './Style.css';
import ModalList from './ModalList';
import Modal from './Modal';

const App = () => {
  const { isShowing, toggle } = Modal();
  return (
    <div>
      <button type="button" className="base-btn" onClick={toggle}>
        <p className="text-base-btn">DELETE CROP</p>
      </button>
      <ModalList isShowing={isShowing} hide={toggle} onClose={toggle} />
    </div>
  );
};

export default App;
