import React, { useContext } from 'react';
import DetailChart from '../detail-chart/detail-chart.component';
import SidebarMenu from '../side-navigation/sidebar.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import './chart-detail-page.css';
import ChartbarMenu from '../chart-data-buttons/chartbar-buttons/chart-data-button.component';
import { ChartDataContext } from '../../containers/chart-detail-page/chart-detail-page.context';
import UserRoleContext from '../../helpers/UserRoleContext';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Logout from '../logout/logout.component';
import Firebase from '../../firebase/index';

const dateButtons = [
  { id: 1, label: 'Last 5 Days' },
  { id: 2, label: 'Last Week' },
  { id: 3, label: 'Custom' },
];

const ChartDetailPage = () => {
  const history = useHistory();
  const {
    boundaryData,
    materialName,
    sensorData,
    chartStartDate,
    startDate,
    currentDate,
    stages,
    unit,
    selectedChartButtonId,
    setSelectedChartButtonId,
    activeChartButton,
    setActiveChartButton,
    setStartCustom,
    setEndCustom,
    updateClick,
    setUpdateClick,
    logoutModal,
    setLogoutModal,
  } = useContext(ChartDataContext);
  const { userRole, userName } = useContext(UserRoleContext);
  const headingText = materialName.toUpperCase();
  return (
    <>
      <SidebarMenu
        isActive={true}
        isVisible={
          userRole && (userRole === 'admin' || userRole === 'super_admin')
        }
        showDashboard={() => history.push('/dashboard')}
        showBatchDetails={() => history.push('/batch-details/1')}
        showAddBatch={() => history.push('/add-batch')}
        logout={() => setLogoutModal(true)}
      />
      <Logout
        userName={userName}
        openState={logoutModal}
        closeAction={() => setLogoutModal(false)}
        logoutFunc={() => Firebase.signOut()}
      />
      <div className="content">
        <div className="wrapper">
          <div className="chart-details">
            <h1 className="heading-text">{headingText} GRAPH DETAILS</h1>
            <ProgressBar
              startDate={startDate.toLocaleString()}
              currentDate={currentDate.toLocaleString()}
              stages={stages}
            />
            <ChartbarMenu
              chartStartDate={chartStartDate}
              buttons={dateButtons}
              selectedChartButtonId={selectedChartButtonId}
              setSelectedChartButtonId={setSelectedChartButtonId}
              setActiveChartButton={setActiveChartButton}
              activeChartButton={activeChartButton}
              setStartCustom={setStartCustom}
              setEndCustom={setEndCustom}
              updateClick={updateClick}
              setUpdateClick={setUpdateClick}
            />
            <DetailChart
              data={sensorData}
              boundary={boundaryData}
              description={materialName}
              unit={unit}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ChartDetailPage;
