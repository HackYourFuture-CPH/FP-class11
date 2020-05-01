import React, { useState, useEffect, useContext } from 'react';
import Firebase from '../../firebase/index';
import { useHistory, useLocation } from 'react-router-dom';

import UserRoleContext from '../../helpers/UserRoleContext';
import DashboardPage from '../../components/dashboard-page/dashboard-page.component';
import LoaderAnimation from '../../components/loader-animation/loader-animation.component';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';

const DashboardPageContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const { batchId } = location.state;
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
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [statusBoxData, setStatusBoxData] = useState(null);

  const fetchData = async (id) => {
    const headers = await getTokenWithHeaders();

    const fetchSensorsData = async (endpoint, setSensorsData) => {
      const sensorsData = await fetch(endpoint, {
        method: 'GET',
        headers,
      }).then((data) => data.json());
      const lastFiveReadings = sensorsData.filter(
        (sensor) => new Date(sensor.created_at) <= new Date(),
      );
      setSensorsData(lastFiveReadings.slice(-5));
    };

    const stagesData = await fetch(`/api/crop-stages/${id}`, {
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
      `/api/batch-default-values/${id}?stage=current`,
      {
        method: 'GET',
        headers,
      },
    ).then((data) => data.json());
    setBoundaryData(defaultValues);

    const statusData = await fetch(`/api/batch-status/${id}`, {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setStatusBoxData(statusData);
  };

  useEffect(() => {
    fetchData(batchId);
  }, [batchId]);

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

  function showDashboard() {
    setShowDropdownItems(!showDropdownItems);
    history.push('/dashboard');
  }

  return loading ? (
    <LoaderAnimation />
  ) : (
    <DashboardPage
      isActive={showDropdownItems}
      isVisible={
        userRole && (userRole === 'admin' || userRole === 'super_admin')
      }
      showDashboardFunc={showDashboard}
      showBatchDetailsFunc={() => history.push('/batch-details/1')}
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
      showWaterDetails={() => history.push('/chart-details/water')}
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
