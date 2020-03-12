import React from 'react';
import './ProgressBar.style.css';
// import { color } from '@storybook/theming';

export default function ProgressBar() {
  const passedDays = 13;
  // const [state, setSate] = useState(60);
  const days = 60
  const data = [];
  for (let i = 0; i < days; i+1) {
    data.push(i);
  }
  return (
    <div className="progressBarComponent">
      <h3>Progress Bar</h3>
      <div className="section">
        {data.map((element) => {
          if (element < passedDays) {
            return (
              <div
                className="dayComponents"
                style={{
                  backgroundColor: 'skyblue',
                  width: 1000 / data.length,
                }}
              />
            );
          } else {
            return (
              <div
                className="dayComponents"
                key={element}
                style={{ width: 1000 / data.length }}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
