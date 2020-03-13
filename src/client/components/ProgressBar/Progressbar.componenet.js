import React from 'react';
import './ProgressBar.style.css';

export default function ProgressBar() {
  const CropTotalDays = 90;
  const CropDaysPassed = 50;
  let show = "hidden";
  const arr = [];
  // const [days, setDays] = useState(CropTotalDays);
  for (let i = 0; i < CropTotalDays; i += 1) arr.push(i);

  return (
    <>
      <h4>Progress Bar</h4>
      <div className="progressbar">
        {arr.map((e) => {
          
            if (e + 1 === CropDaysPassed) show = "visible"
            else show = "hidden";
          
          if (e < CropDaysPassed) {
            return (
              <div
                type="text"
                key={e}
                className="compmid tooltip"
                style={{ width: 1000 / arr.length }}
              >
                <span className="tooltiptext" style={{ visibility: show }}>
                  Day:{e + 1}
                </span>
              </div>
            );
          }
          return (
            <div
              type="text"
              key={e}
              className="compmid"
              style={{
                width: 1000 / arr.length,
                backgroundColor: "lightgrey"
              }}
            />
          );
        })}
      </div>
    </>
  );
}
