import React from 'react';
import PropTypes from 'prop-types';
import './dashboard-page.style.css';
import SidebarMenu from '../side-navigation/sidebar.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import Card from '../card/card.component';
import { CardTitle } from '../card/card-title.component';
import { CropSummary } from '../card/crop-summary-card/crop-summary-card.component';
import LineChartForDashboard from '../line-chart-for-dashboard/line-chart-for-dashboard.component';
import Footer from '../footer/footer.component';
import Logout from '../logout/logout.component';

export default function DashboardPage({
  isActive,
  isVisible,
  showDashboardFunc,
  showBatchDetailsFunc,
  showAddBatchFunc,
  showLogoutModal,
  userName,
  logoutModal,
  closeAction,
  logoutFunc,
  progressBarData,
  lineChartData,
  boundary,
  showTemperatureDetails,
  showHumidityDetails,
  showPhDetails,
  showEcDetails,
  showWaterDetails,
  statusHarvestDayleft,
  statusProjDayLeft,
  statusStartDate,
  statusEndDate,
  statusStage,
  statusDayCount,
}) {
  return (
    <div className="dashboard">
      <SidebarMenu
        isActive={isActive}
        isVisible={isVisible}
        showDashboard={showDashboardFunc}
        showBatchDetails={showBatchDetailsFunc}
        showAddBatch={showAddBatchFunc}
        logout={showLogoutModal}
      />
      <Logout
        userName={userName}
        openState={logoutModal}
        closeAction={closeAction}
        logoutFunc={logoutFunc}
      />
      <div className="content">
        <div className="wrapper">
          <header>
            <h1>Batch overview</h1>
          </header>
          <main>
            <ProgressBar
              startDate={progressBarData.startDate}
              currentDate={progressBarData.currentDate}
              stages={progressBarData.stages}
            />
            <div className="cards">
              <CropSummary
                harvestDayLeft={statusHarvestDayleft}
                projDayLeft={statusProjDayLeft}
                prodStartDate={statusStartDate}
                prodEndDate={statusEndDate}
                stageName={statusStage}
                dayCount={statusDayCount}
              />
              <Card>
                <CardTitle title="Temperature" />
                <LineChartForDashboard
                  data={lineChartData}
                  materialId={1}
                  boundary={boundary[0]}
                  description="Temperature"
                  unit="°C"
                  showDetailChartFunc={showTemperatureDetails}
                />
              </Card>
              <Card>
                <CardTitle title="Humidity" />
                <LineChartForDashboard
                  data={lineChartData}
                  materialId={2}
                  boundary={boundary[1]}
                  description="Humidity"
                  unit="%"
                  showDetailChartFunc={showHumidityDetails}
                />
              </Card>
              <Card>
                <CardTitle title="Water PH" />
                <LineChartForDashboard
                  data={lineChartData}
                  materialId={3}
                  boundary={boundary[2]}
                  description="PH"
                  unit="pH"
                  showDetailChartFunc={showPhDetails}
                />
              </Card>
              <Card>
                <CardTitle title="Water EC" />
                <LineChartForDashboard
                  data={lineChartData}
                  materialId={4}
                  boundary={boundary[3]}
                  description="EC"
                  unit="ppm"
                  showDetailChartFunc={showEcDetails}
                />
              </Card>
              <Card>
                <CardTitle title="Water Level" />
                <LineChartForDashboard
                  data={lineChartData}
                  materialId={5}
                  boundary={boundary[4]}
                  description="Water level"
                  unit="㎥"
                  showDetailChartFunc={showWaterDetails}
                />
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

DashboardPage.defaultProps = {
  statusHarvestDayleft: 0,
  statusProjDayLeft: 0,
  statusDayCount: 0,
};

DashboardPage.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  showDashboardFunc: PropTypes.func.isRequired,
  showBatchDetailsFunc: PropTypes.func.isRequired,
  showAddBatchFunc: PropTypes.func.isRequired,
  showLogoutModal: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  logoutModal: PropTypes.bool.isRequired,
  closeAction: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired,
  progressBarData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  lineChartData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  boundary: PropTypes.oneOfType([PropTypes.array]).isRequired,
  showTemperatureDetails: PropTypes.func.isRequired,
  showHumidityDetails: PropTypes.func.isRequired,
  showPhDetails: PropTypes.func.isRequired,
  showEcDetails: PropTypes.func.isRequired,
  showWaterDetails: PropTypes.func.isRequired,
  statusHarvestDayleft: PropTypes.number,
  statusProjDayLeft: PropTypes.number,
  statusStartDate: PropTypes.string.isRequired,
  statusEndDate: PropTypes.string.isRequired,
  statusStage: PropTypes.string.isRequired,
  statusDayCount: PropTypes.number,
};
