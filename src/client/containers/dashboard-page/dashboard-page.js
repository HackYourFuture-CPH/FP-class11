import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase/auth';

import './dashboard-page.css';

import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Card from '../../components/card/card.component';
import Label from '../../components/label/label.component';
//import CropSummary from '../../components/crop-summary/crop-summary.component';
import LineChartForDashboard from '../../components/line-chart-for-dashboard/line-chart-for-dashboard.component';
import Footer from '../../components/footer/footer.component';

const DashboardPage = ({ title }) => {
  const history = useHistory();

  const daysLeftToHarvest = 41;
  const daysLeftToEnd = 48;
  const currentStage = 'Seeding';
  const currentStageDay = 2;
  const productionStartDate = '2020-01-25 00:00:00';
  const productionEndDate = '2020-03-11 00:00:00';

  const placeholder = 'placeholder';

  return (
      <main class="dashboard">
        <SidebarMenu text="Dashboard" isactive={false} isuser={true} />
        {/* <button
        type="submit"
        onClick={() => {
          firebase.signOut();
          history.push('/');
        }}
      >
        Sign out
      </button> */}
      <div className="content">
        <h1>Crop Overview</h1>
        <ProgressBar
          startDate="2020-03-03"
          currentDate="2020-03-21"
          stages={[
            { name: 'seeding', duration: 3 },
            {
              name: 'propagation',
              duration: 14,
            },
            { name: 'maturity', duration: 28 },
            { name: 'harvest', duration: 4 },
            { name: 'delivery', duration: 3 },
          ]}
        />
        <div>
          <Card title="Status">
            <Label title="Check PH" className="label-danger" />
            {/* <CropSummary
              daysLeftToHarvest={daysLeftToHarvest}
              daysLeftToEnd={daysLeftToEnd}
              currentStage={currentStage}
              currentStageDay={currentStageDay}
              productionStartDate={productionStartDate}
              productionEndDate={productionEndDate}
            /> */}
          </Card>
          {/* <Card title="Temperature">
            <LineChartForDashboard
              tempData={{
                name: 'shiso',
                timestamp: 1577836860000,
                temp: 22.95,
              }}
              strokeGrid="10"
              strokeAxis="5"
              minColor="1"
              maxColor="3"
              optimalValue="15"
              strokeWidthRef={2}
              strokeLine="3"
              strokeWidthLine={2}
              ReferanceAreaColor="5"
            />
          </Card>
          <Card title="Humidity">
            <LineChartForDashboard
              tempData={{
                name: 'shiso',
                timestamp: 1577836860000,
                temp: 22.95,
              }}
              strokeGrid="10"
              strokeAxis="5"
              minColor="1"
              maxColor="3"
              optimalValue="15"
              strokeWidthRef={2}
              strokeLine="3"
              strokeWidthLine={2}
              ReferanceAreaColor="5"
            />
          </Card>
          <Card title="Water PH">
            <LineChartForDashboard
              tempData={{
                name: 'shiso',
                timestamp: 1577836860000,
                temp: 22.95,
              }}
              strokeGrid="10"
              strokeAxis="5"
              minColor="1"
              maxColor="3"
              optimalValue="15"
              strokeWidthRef={2}
              strokeLine="3"
              strokeWidthLine={2}
              ReferanceAreaColor="5"
            />
          </Card>
          <Card title="Water EC">
            <LineChartForDashboard
              tempData={{
                name: 'shiso',
                timestamp: 1577836860000,
                temp: 22.95,
              }}
              strokeGrid="10"
              strokeAxis="5"
              minColor="1"
              maxColor="3"
              optimalValue="15"
              strokeWidthRef={2}
              strokeLine="3"
              strokeWidthLine={2}
              ReferanceAreaColor="5"
            />
          </Card>
          <Card title="Water Level">
            <LineChartForDashboard
              tempData={{
                name: 'shiso',
                timestamp: 1577836860000,
                temp: 22.95,
              }}
              strokeGrid="10"
              strokeAxis="5"
              minColor="1"
              maxColor="3"
              optimalValue="15"
              strokeWidthRef={2}
              strokeLine="3"
              strokeWidthLine={2}
              ReferanceAreaColor="5"
            />
          </Card> */}
        </div>
        <Footer />
      </div>
      </main>
  );
};

export default DashboardPage;
