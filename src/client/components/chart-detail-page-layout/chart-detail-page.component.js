import React, { useContext } from 'react';
import DetailChart from '../detail-chart/detail-chart.component';
import SidebarMenu from '../side-navigation/sidebar.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import './chart-detail-page.css';
import ChartbarMenu from '../chart-data-buttons/chartbar-buttons/chart-data-button.component';
import { ChartDataContext } from '../../containers/chart-detail-page/chart-detail-page.context';

const value = [
  { id: 1, label: 'Last 5 Days' },
  { id: 2, label: 'Last Week' },
  { id: 3, label: 'Last Two Weeks' },
  { id: 4, label: 'Last Month' },
  { id: 5, label: 'Custom' },
];

const ChartDetailPage = () => {
  const chartvalues = useContext(ChartDataContext);
  const {
    boundaryData,
    materialName,
    sensorData,
    startDate,
    currentDate,
    stages,
    units,
    selectedChartButtonId,
    setSelectedChartButtonId,
  } = chartvalues;

  const headingText = materialName.toUpperCase();

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
        <ChartbarMenu
          buttons={value}
          selectedChartButtonId={selectedChartButtonId}
          setSelectedChartButtonId={setSelectedChartButtonId}
        />
        <DetailChart
          data={sensorData}
          boundary={boundaryData}
          description={materialName}
          unit={units}
        />
      </div>
    </>
  );
};

export default ChartDetailPage;
