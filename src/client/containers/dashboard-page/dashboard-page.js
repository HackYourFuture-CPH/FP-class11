import React from 'react';
import Firebase from '../../firebase/index';

import './dashboard-page.css';

import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Card from '../../components/card/card.component';
// import Label from '../../components/label/label.component';
// import CropSummary from '../../components/crop-summary/crop-summary.component';
import LineChartForDashboard from '../../components/line-chart-for-dashboard/line-chart-for-dashboard.component';
import Footer from '../../components/footer/footer.component';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <SidebarMenu
        text="Dashboard"
        isactive={false}
        logoutFunc={() => {
          Firebase.signOut();
        }}
      />
      <div className="content">
        <header>
          <h1>Crop Overview</h1>
        </header>
        <main>
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
          <div className="cards">
            {/* <Card title="Status">
          <Label title="Check PH" className="label-danger" />
              <CropSummary
              daysLeftToHarvest={41}
              daysLeftToEnd={48}
              currentStage='Seeding'
              currentStageDay={2}
              productionStartDate={'2020-01-25 00:00:00'}
              productionEndDate={'2020-01-25 00:00:00'}
            />   
          </Card> */}
            <Card>
              <h3>Temperature</h3>
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card title="Humidity">
              <h3>Humidity</h3>
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <h3>Water PH</h3>
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <h3>Water EC</h3>
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
            <Card>
              <h3>Water level</h3>
              <LineChartForDashboard
                tempData={[
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 20,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 17,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 15,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 21,
                  },
                  {
                    name: 'shiso',
                    timestamp: 1577836860000,
                    temp: 13,
                  },
                ]}
                strokeGrid="#fff"
                strokeAxis="#808080"
                minColor="#FF0000"
                maxColor="#FF0000"
                optimalValue="#008000"
                strokeWidthRef={2}
                strokeLine="#000"
                strokeWidthLine={2}
                ReferanceAreaColor="#808080"
              />
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
