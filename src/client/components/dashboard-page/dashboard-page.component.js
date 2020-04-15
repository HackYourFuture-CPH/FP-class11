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
  showTemperatureDetails,
  showHumidityDetails,
  showPhDetails,
  showEcDetails,
  showWaterDetails,
}) {
  return (
    <div className="dashboard">
      <SidebarMenu
        isActive={false}
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
            <CropSummary />
            <Card>
              <CardTitle title="Temperature" />
              <LineChartForDashboard
                data={lineChartData}
                materialId="1"
                boundary={{
                  optimum: 23,
                  minimum: 16,
                  maximum: 28,
                }}
                description="Temperature"
                unit="°C"
                showDetailChartFunc={showTemperatureDetails}
              />
            </Card>
            <Card>
              <CardTitle title="Humidity" />
              <LineChartForDashboard
                data={lineChartData}
                materialId="2"
                boundary={{
                  optimum: 80,
                  minimum: 70,
                  maximum: 90,
                }}
                description="Humidity"
                unit="%"
                showDetailChartFunc={showHumidityDetails}
              />
            </Card>
            <Card>
              <CardTitle title="Water PH" />
              <LineChartForDashboard
                data={lineChartData}
                materialId="3"
                boundary={{
                  optimum: 5,
                  minimum: 4,
                  maximum: 6,
                }}
                description="PH"
                unit="pH"
                showDetailChartFunc={showPhDetails}
              />
            </Card>
            <Card>
              <CardTitle title="Water EC" />
              <LineChartForDashboard
                data={lineChartData}
                materialId="4"
                boundary={{
                  optimum: 900,
                  minimum: 700,
                  maximum: 1120,
                }}
                description="EC"
                unit="ppm"
                showDetailChartFunc={showEcDetails}
              />
            </Card>
            <Card>
              <CardTitle title="Water Level" />
              <LineChartForDashboard
                data={lineChartData}
                materialId="5"
                boundary={{
                  optimum: 500,
                  minimum: 150,
                  maximum: 900,
                }}
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
  );
}

DashboardPage.propTypes = {
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
  showTemperatureDetails: PropTypes.func.isRequired,
  showHumidityDetails: PropTypes.func.isRequired,
  showPhDetails: PropTypes.func.isRequired,
  showEcDetails: PropTypes.func.isRequired,
  showWaterDetails: PropTypes.func.isRequired,
};
