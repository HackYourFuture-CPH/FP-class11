import React, { useState, useEffect, useContext } from 'react';
import Firebase from '../../firebase/index';
import { useHistory } from 'react-router-dom';

import UserRoleContext from '../../helpers/UserRoleContext';
import DashboardPage from '../../components/dashboard-page/dashboard-page.component';
import LoaderAnimation from '../../components/loader-animation/loader-animation.component';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';

const DashboardPageContainer = () => {
  const history = useHistory();
  const { userRole, userName } = useContext(UserRoleContext);

  const [logoutModal, setLogoutModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progressBarData, setProgressBarData] = useState(null);
  const [lineChartDataTemperature, setLineChartDataTempareture] = useState(
    null,
  );
  const [lineChartDataHumidity, setLineChartDataHumidity] = useState(null);
  const [lineChartDataPh, setLineChartDataPh] = useState(null);
  const [lineChartDataEc, setLineChartDataEc] = useState(null);
  const [lineChartDataWaterLevel, setLineChartDataWaterLevel] = useState(null);
  const [boundaryData, setBoundaryData] = useState(null);
  const [statusBoxData, setStatusBoxData] = useState(null);

  const fetchData = async () => {
    const headers = await getTokenWithHeaders();

    const fetchSensorsData = async (endpoint, setSensorsData) => {
      const sensorsData = await fetch(endpoint, {
        method: 'GET',
        headers,
      }).then((data) => data.json());
      setSensorsData(sensorsData.slice(-5));
    };

    const stagesData = await fetch('/api/crop-stages/1', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setProgressBarData(stagesData);

    fetchSensorsData('/api/sensor-reading/1', setLineChartDataTempareture);
    fetchSensorsData('/api/sensor-reading/2', setLineChartDataHumidity);
    fetchSensorsData('/api/sensor-reading/3', setLineChartDataPh);
    fetchSensorsData('/api/sensor-reading/4', setLineChartDataEc);
    fetchSensorsData('/api/sensor-reading/5', setLineChartDataWaterLevel);

    const defaultValues = await fetch(
      '/api/batch-default-values/1?stage=current',
      {
        method: 'GET',
        headers,
      },
    ).then((data) => data.json());
    setBoundaryData(defaultValues);

    const statusData = await fetch('/api/batch-status/1', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setStatusBoxData(statusData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (
      userRole &&
      userName &&
      progressBarData &&
      lineChartDataTemperature &&
      lineChartDataHumidity &&
      lineChartDataPh &&
      lineChartDataEc &&
      lineChartDataWaterLevel &&
      boundaryData &&
      statusBoxData
    )
      setLoading(false);
  }, [
    userRole,
    userName,
    progressBarData,
    lineChartDataTemperature,
    lineChartDataHumidity,
    lineChartDataPh,
    lineChartDataEc,
    lineChartDataWaterLevel,
    boundaryData,
    statusBoxData,
  ]);
  return loading ? (
    <LoaderAnimation />
  ) : (
    <DashboardPage
      isVisible={
        userRole && (userRole === 'admin' || userRole === 'super_admin')
      }
      showDashboardFunc={() => history.push('/dashboard')}
      showBatchDetailsFunc={() => history.push('/batch-details')}
      showAddBatchFunc={() => history.push('/add-batch')}
      showLogoutModal={() => setLogoutModal(true)}
      userName={userName}
      logoutModal={logoutModal}
      closeAction={() => setLogoutModal(false)}
      logoutFunc={() => Firebase.signOut()}
      progressBarData={progressBarData}
      lineChartData={{
        sensorsReadings: [
          ...lineChartDataTemperature,
          ...lineChartDataHumidity,
          ...lineChartDataPh,
          ...lineChartDataEc,
          ...lineChartDataWaterLevel,
        ],
      }}
      boundary={boundaryData}
      showTemperatureDetails={() => history.push('/chart-details/temperature')}
      showHumidityDetails={() => history.push('/chart-details/humidity')}
      showPhDetails={() => history.push('/chart-details/ph')}
      showEcDetails={() => history.push('/chart-details/ec')}
      showWaterDetails={() => history.push('/chart-details/water-level')}
      statusHarvestDayleft={statusBoxData.daysLeftToHarvest}
      statusProjDayLeft={statusBoxData.daysLeftToEndBatch}
      statusStartDate={statusBoxData.productionStartDate}
      statusEndDate={statusBoxData.productionEndDate}
      statusStage={statusBoxData.currentStage.status}
      statusDayCount={statusBoxData.currentStage.day}
    />
  );
};

export default DashboardPageContainer;
