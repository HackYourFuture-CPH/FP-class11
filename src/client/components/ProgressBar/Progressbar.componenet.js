import React, { useState } from 'react';
import './ProgressBar.style.css';

export default function ProgressBar() {
  const CropTotalDays = 90;
  const CropDaysPassed = 40;
  const arr = [];
  const [days, setDays] = useState(CropTotalDays);
  for (let i = 0; i < days; i += 1) arr.push(i);

  return (
    <>
      <h4>Progress Bar</h4>
      <div className="progressbar">
        {arr.map((e) => {
          if (e < CropDaysPassed) {
            return (
              <input
                type="text"
                key={e}
                className="compmid"
                style={{ width: 1000 / arr.length }}
              />
            )
          } else {
            return (
              <input
                type="text"
                key={e}
                className="compmid"
                style={{
                  width: 1000 / arr.length,
                  backgroundColor: 'lightgrey',
                }}
              />
            );
          }
        })}
      </div>
    </>
  );
}
