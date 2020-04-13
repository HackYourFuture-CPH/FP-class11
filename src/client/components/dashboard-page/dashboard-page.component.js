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
                tempData={lineChartData.tempData}
                strokeGrid={lineChartData.strokeGrid}
                strokeAxis={lineChartData.strokeAxis}
                minColor={lineChartData.minColor}
                maxColor={lineChartData.maxColor}
                optimalValue={lineChartData.optimalValue}
                strokeWidthRef={lineChartData.strokeWidthRef}
                strokeLine={lineChartData.strokeLine}
                strokeWidthLine={lineChartData.strokeWidthLine}
                ReferanceAreaColor={lineChartData.referanceAreaColor}
              />
            </Card>
            <Card>
              <CardTitle title="Humidity" />
              <LineChartForDashboard
                tempData={lineChartData.tempData}
                strokeGrid={lineChartData.strokeGrid}
                strokeAxis={lineChartData.strokeAxis}
                minColor={lineChartData.minColor}
                maxColor={lineChartData.maxColor}
                optimalValue={lineChartData.optimalValue}
                strokeWidthRef={lineChartData.strokeWidthRef}
                strokeLine={lineChartData.strokeLine}
                strokeWidthLine={lineChartData.strokeWidthLine}
                ReferanceAreaColor={lineChartData.referanceAreaColor}
              />
            </Card>
            <Card>
              <CardTitle title="Water PH" />
              <LineChartForDashboard
                tempData={lineChartData.tempData}
                strokeGrid={lineChartData.strokeGrid}
                strokeAxis={lineChartData.strokeAxis}
                minColor={lineChartData.minColor}
                maxColor={lineChartData.maxColor}
                optimalValue={lineChartData.optimalValue}
                strokeWidthRef={lineChartData.strokeWidthRef}
                strokeLine={lineChartData.strokeLine}
                strokeWidthLine={lineChartData.strokeWidthLine}
                ReferanceAreaColor={lineChartData.referanceAreaColor}
              />
            </Card>
            <Card>
              <CardTitle title="Water EC" />
              <LineChartForDashboard
                tempData={lineChartData.tempData}
                strokeGrid={lineChartData.strokeGrid}
                strokeAxis={lineChartData.strokeAxis}
                minColor={lineChartData.minColor}
                maxColor={lineChartData.maxColor}
                optimalValue={lineChartData.optimalValue}
                strokeWidthRef={lineChartData.strokeWidthRef}
                strokeLine={lineChartData.strokeLine}
                strokeWidthLine={lineChartData.strokeWidthLine}
                ReferanceAreaColor={lineChartData.referanceAreaColor}
              />
            </Card>
            <Card>
              <CardTitle title="Water Level" />
              <LineChartForDashboard
                tempData={lineChartData.tempData}
                strokeGrid={lineChartData.strokeGrid}
                strokeAxis={lineChartData.strokeAxis}
                minColor={lineChartData.minColor}
                maxColor={lineChartData.maxColor}
                optimalValue={lineChartData.optimalValue}
                strokeWidthRef={lineChartData.strokeWidthRef}
                strokeLine={lineChartData.strokeLine}
                strokeWidthLine={lineChartData.strokeWidthLine}
                ReferanceAreaColor={lineChartData.referanceAreaColor}
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
};
