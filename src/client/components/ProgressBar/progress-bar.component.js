import React from 'react';
import './progress-bar.style.css';

export default function ProgressBar() {
  const cropSeedingDays = 3;
  const cropPropagationDays = 14;
  const cropMaturityDays = 28;
  const cropHarvestDays = 3;
  let showToolTip = 'hidden';
  let showStageTip = 'hidden';
  let phaseChangeBorder = '';
  let phaseChangeBorderColor = '';
  const cropPassedDays = 13;
  const cropTotalDays = 52;
  let index = -1;
  const stages = ['Seeding', 'Propagation', 'Maturity', 'Harvest', 'delivery'];
  const data = [];
  for (let i = 0; i < cropTotalDays; i += 1) {
    data.push(i);
  }
  return (
    <div className="progressBarComponent">
      <h3>Progress Bar</h3>
      <div className="section">
        {data.map((e) => {
          if (e + 1 === cropPassedDays) showToolTip = 'visible';
          else showToolTip = 'hidden';
          if (
            e === cropSeedingDays - cropSeedingDays ||
            e === cropSeedingDays ||
            e === cropSeedingDays + cropPropagationDays ||
            e === cropSeedingDays + cropPropagationDays + cropMaturityDays ||
            e ===
              cropSeedingDays +
                cropPropagationDays +
                cropMaturityDays +
                cropHarvestDays
          ) {
            showStageTip = 'visible';
            index += 1;
          } else showStageTip = 'hidden';

          if (
            e + 1 === cropSeedingDays ||
            e + 1 - cropSeedingDays === cropPropagationDays ||
            e + 1 - cropSeedingDays - cropPropagationDays ===
              cropMaturityDays ||
            e + 1 - cropSeedingDays - cropPropagationDays - cropMaturityDays ===
              cropHarvestDays
          ) {
            phaseChangeBorder = '.5em';
            phaseChangeBorderColor = 'rgb(18, 121, 161)';
          } else {
            phaseChangeBorder = '.05em';
            phaseChangeBorderColor = 'white';
          }
          if (e < cropPassedDays) {
            return (
              <div
                className="dayComponents toolTip  tooltip-stage"
                style={{
                  backgroundColor: 'skyblue',
                  width: 1000 / data.length,
                  borderWidth: phaseChangeBorder,
                  borderColor: phaseChangeBorderColor,
                }}
              >
                <span
                  className="toolTipText"
                  style={{ visibility: showToolTip }}
                >
                  Day:{e + 1}
                </span>
                <span
                  className="tooltiptext-stage"
                  style={{ visibility: showStageTip }}
                >
                  {stages[index]}
                </span>
              </div>
            );
          }
          return (
            <div
              className="dayComponents tooltip-stage"
              key={e}
              style={{
                width: 1000 / data.length,
                borderWidth: phaseChangeBorder,
                backgroundColor: 'rgb(246, 246, 246)',
              }}
            >
              <span
                className="tooltiptext-stage"
                style={{ visibility: showStageTip }}
              >
                {stages[index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
