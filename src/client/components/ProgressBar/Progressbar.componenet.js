import React, { useState } from 'react';
import './ProgressBar.style.css';

export default function ProgressBar() {
  const CropTotalDays = 90;
  const CropDaysPassed = 20;
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
              <div
                type="text"
                key={e}
                className="compmid tooltip"
                style={{ width: 1000 / arr.length }}
              >
                  <span class="tooltiptext">day:{e+1}</span>

              </div>
              
            )
          } else {
            return (
              <div
                type="text"
                key={e}
                className="compmid"
                style={{
                  width: 1000 / arr.length,
                  backgroundColor: 'lightgrey',
                }}
              ></div>
            );
          }
        })}
      </div>
    </>
  );
}
