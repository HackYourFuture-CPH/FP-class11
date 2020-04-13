import React from 'react';
import Firebase from '../../firebase/index';
// import { useHistory } from 'react-router-dom';

// import DashboardPage from '../../components/dashboard-page/dashboard-page.component';
// import UserRoleContext from '../../helpers/UserRoleContext';

const DashboardPageContainer = () => {
  // const history = useHistory();
  // const [logoutModal, setLogoutModal] = useState(false);
  // const userRole = useContext(UserRoleContext);
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
    //     (userRole && userRole === 'admin') || userRole === 'super_admin'
    //   }
    //   showDashboardFunc={() => history.push('/dashboard')}
    //   showBatchDetailsFunc={() => history.push('/batch-details')}
    //   showAddBatchFunc={() => history.push('/add-batch')}
    //   logoutFunc={() => setLogoutModal(true)}
    //   userName="name from DB"
    //   logoutModal={logoutModal}
    //   progressBarData={'endpoint from DB'}
    //   lineChartData={'endpoint from DB'}
    // />
  );
};

export default DashboardPageContainer;
