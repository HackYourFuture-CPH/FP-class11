import React, { useState, useContext } from 'react';
import '../../components/detail-chart/detail-chart.style.css';
import DetailChart from '../../components/detail-chart/detail-chart.component';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import './chart-detail-page.css';
// import UpdateDateRange from '../../components/update-date-range/update-date-range.component';
import ChartbarMenu from '../../components/chart-data-buttons/chartbar-buttons/chart-data-button.component';
import { ChartDataContext } from './chart-detail-page.context';
import UserRoleContext from '../../helpers/UserRoleContext';
import { useHistory } from 'react-router-dom';
import Logout from '../../components/logout/logout.component';
import Firebase from '../../firebase/index';

const value = [
  { id: 1, label: 'Last 5 Days' },
  { id: 2, label: 'Last Week' },
  { id: 3, label: 'Last Two Weeks' },
  { id: 4, label: 'Last Month' },
  { id: 5, label: 'Custom' },
];

const ChartDetailPage = () => {
  const history = useHistory();
  const {
    boundaryData,
    materialName,
    sensorData,
    startDate,
    currentDate,
    stages,
    unit,
  } = useContext(ChartDataContext);
  const { userRole, userName } = useContext(UserRoleContext);
  const headingText = materialName.toUpperCase();
  const [logoutModal, setLogoutModal] = useState(false);
  return (
    <>
      <SidebarMenu
        isActive={true}
        isVisible={
          userRole && (userRole === 'admin' || userRole === 'super_admin')
        }
        showDashboard={() => history.push('/dashboard')}
        showBatchDetails={() => history.push('/batch-details')}
        showAddBatch={() => history.push('/add-batch')}
        logout={() => setLogoutModal(true)}
      />
      <Logout
        userName={userName}
        openState={logoutModal}
        closeAction={() => setLogoutModal(false)}
        logoutFunc={() => Firebase.signOut()}
      />
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
          boundary={boundaryData}
          description={materialName}
          unit={unit}
        />
      </div>
    </>
  );
};

export default ChartDetailPage;
