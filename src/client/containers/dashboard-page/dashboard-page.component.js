import React from 'react';
// import React, { useState, useEffect, useContext } from 'react';
import Firebase from '../../firebase/index';
// import { useHistory } from 'react-router-dom';

// import DashboardPage from '../../components/dashboard-page/dashboard-page.component';
// import UserRoleContext from '../../helpers/UserRoleContext';
// import ProgressBar from '../../components/progress-bar/progress-bar.component';
// import LoaderAnimation from '../../components/loader-animation/loader-animation.component';

const DashboardPageContainer = () => {
  // const history = useHistory();
  // const [logoutModal, setLogoutModal] = useState(false);
  // const { userRole, userName } = useContext(UserRoleContext);
  // const [loading, setLoading] = useState(true);
  // const [progressBarData, setProgressBarData] = useState({});

  // const fetchBatchStages = async () => {
  //   const stagesData = await fetch('/api/crop-stages/1').then((data) =>
  //     data.json(),
  //   );
  //   setProgressBarData(stagesData);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchBatchStages();
  // }, []);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            Firebase.signOut();
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <h1>Batch overview</h1>
      </div>
    </div>
    // <DashboardPage
    //   isVisible={
    //     (userRole && (userRole === 'admin' || userRole === 'super_admin')
    //   }
    //   showDashboardFunc={() => history.push('/dashboard')}
    //   showBatchDetailsFunc={() => history.push('/batch-details')}
    //   showAddBatchFunc={() => history.push('/add-batch')}
    //   logoutFunc={() => setLogoutModal(true)}
    //   userName={userName}
    //   logoutModal={logoutModal}
    //   progressBarData={progressBarData}
    //   lineChartData={'endpoint from DB'}
    //   showTemperatureDetails={() => history.push('/chart-details/temperature')}
    //   showHumidityDetails={() => history.push('/chart-details/humidity')}
    //   showPhDetails={() => history.push('/chart-details/ph')}
    //   showEcDetails={() => history.push('/chart-details/ec')}
    //   showWaterDetails={() => history.push('/chart-details/water-level')}
    // />
  );
};

export default DashboardPageContainer;
