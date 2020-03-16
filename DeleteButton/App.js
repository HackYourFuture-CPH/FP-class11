import React from "react";
import "./Style.css";
import ModalList from "./ModalList";
import Modal from "./Modal";

const App = () => {
  const { isShowing, toggle } = Modal();
  return (
    <div>
      <button className="base-btn" onClick={toggle}>
        DELETE CROP
      </button>
      <ModalList isShowing={isShowing} hide={toggle} onClose={toggle} />
    </div>
  );
};

export default App;
