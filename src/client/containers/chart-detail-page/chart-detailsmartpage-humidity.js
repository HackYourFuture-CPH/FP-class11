import React, { useContext } from 'react';
import '../../components/detail-chart/detail-chart.style.css';
import DetailChart from '../../components/detail-chart/detail-chart.component';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import './chart-detail-smartpage.css';
// import UpdateDateRange from '../../components/update-date-range/update-date-range.component';
import ChartbarMenu from '../../components/chart-data-buttons/chartbar-buttons/chart-data-button.component';
import { ChartDataContext } from './chart-detail-context';

const value = [
  { id: 1, label: 'Last 5 Days' },
  { id: 2, label: 'Last Week' },
  { id: 3, label: 'Last Two Weeks' },
  { id: 4, label: 'Last Month' },
  { id: 5, label: 'Custom' },
];

const ChartDetailSmartPageHumidity = () => {
  const chartvalues = useContext(ChartDataContext);
  const {
    boundary,
    materialName,
    sensorData,
    startDate,
    currentDate,
    stages,
    units,
  } = chartvalues;

  const headingText = materialName.toUpperCase();
  console.log(sensorData);
  return (
    <>
      <SidebarMenu />
      <div className="chart-details">
        <h1>{headingText} GRAPH DETAILS</h1>
        <ProgressBar
          startDate={startDate}
          currentDate={currentDate}
          stages={stages}
        />
        <ChartbarMenu buttons={value} />
        <DetailChart
          data={sensorData}
          boundary={boundary}
          description={materialName}
          unit={units}
        />
      </div>
    </>
  );
};

export default ChartDetailSmartPageHumidity;