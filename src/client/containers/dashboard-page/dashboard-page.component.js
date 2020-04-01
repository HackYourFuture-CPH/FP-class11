import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Card from '../../components/card/card.component';
import Label from '../../components/label/label.component';
import CropSummary from '../../components/crop-summary/crop-summary.component';
import LineChartForDashboard from '../../components/line-chart-for-dashboard/line-chart-for-dashboard.component';
import Footer from '../../components/footer/footer.component';

const DashboardPage = ({ title }) => {
  const daysLeftToHarvest = 41;
  const daysLeftToEnd = 48;
  const currentStage = 'Seeding';
  const currentStageDay = 2;
  const productionStartDate = '2020-01-25 00:00:00';
  const productionEndDate = '2020-03-11 00:00:00';

  const placeholder = 'placeholder';

  return (
    <div>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <h1>{title}</h1>
        <ProgressBar />
        <div>
          <Card title="Status">
            <Label isOnTime={true} />
            <CropSummary
              daysLeftToHarvest={daysLeftToHarvest}
              daysLeftToEnd={daysLeftToEnd}
              currentStage={currentStage}
              currentStageDay={currentStageDay}
              productionStartDate={productionStartDate}
              productionEndDate={productionEndDate}
            />
          </Card>
          <Card title="Temperature">
            <LineChartForDashboard
              tempData={placeholder}
              strokeGrid={placeholder}
              strokeAxis={placeholder}
              minColor={placeholder}
              maxColor={placeholder}
              optimalValue={placeholder}
              strokeWidthRef={placeholder}
              strokeLine={placeholder}
              strokeWidthLine={placeholder}
              ReferanceAreaColor={placeholder}
            />
          </Card>
          <Card title="Humidity">
            <LineChartForDashboard
              tempData={placeholder}
              strokeGrid={placeholder}
              strokeAxis={placeholder}
              minColor={placeholder}
              maxColor={placeholder}
              optimalValue={placeholder}
              strokeWidthRef={placeholder}
              strokeLine={placeholder}
              strokeWidthLine={placeholder}
              ReferanceAreaColor={placeholder}
            />
          </Card>
          <Card title="Water PH">
            <LineChartForDashboard
              tempData={placeholder}
              strokeGrid={placeholder}
              strokeAxis={placeholder}
              minColor={placeholder}
              maxColor={placeholder}
              optimalValue={placeholder}
              strokeWidthRef={placeholder}
              strokeLine={placeholder}
              strokeWidthLine={placeholder}
              ReferanceAreaColor={placeholder}
            />
          </Card>
          <Card title="Water EC">
            <LineChartForDashboard
              tempData={placeholder}
              strokeGrid={placeholder}
              strokeAxis={placeholder}
              minColor={placeholder}
              maxColor={placeholder}
              optimalValue={placeholder}
              strokeWidthRef={placeholder}
              strokeLine={placeholder}
              strokeWidthLine={placeholder}
              ReferanceAreaColor={placeholder}
            />
          </Card>
          <Card title="Water Level">
            <LineChartForDashboard
              tempData={placeholder}
              strokeGrid={placeholder}
              strokeAxis={placeholder}
              minColor={placeholder}
              maxColor={placeholder}
              optimalValue={placeholder}
              strokeWidthRef={placeholder}
              strokeLine={placeholder}
              strokeWidthLine={placeholder}
              ReferanceAreaColor={placeholder}
            />
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;

DashboardPage.propTypes = {
  title: PropTypes.string.isRequired,
};
