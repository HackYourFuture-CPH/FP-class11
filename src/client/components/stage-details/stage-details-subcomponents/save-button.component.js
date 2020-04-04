import React from 'react';

import Button from '../../button/button.component';

export default function SaveButton() {
  return (
    <div className="save-btn-container">
      <Button type="primary" onClick={() => null}>
        Save Crop Details
      </Button>
    </div>
  );
}
