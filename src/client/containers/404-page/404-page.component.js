import React, { useState, useEffect, useContext } from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import Logout from '../../components/logout/logout.component';
import Page404 from '../../components/page404/page404.component';
import Footer from '../../components/footer/footer.component';
import { useHistory } from 'react-router-dom';
import Firebase from '../../firebase/index';
import UserRoleContext from '../../helpers/UserRoleContext';
import LoaderAnimation from '../../components/loader-animation/loader-animation.component';

const Page404Container = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { userRole, userName } = useContext(UserRoleContext);
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    if (userRole && userName) setLoading(false);
  }, [userRole, userName]);
  return loading ? (
    <LoaderAnimation />
  ) : (
    <>
      <div>
        <SidebarMenu
          isActive={false}
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
      </div>
      <div className="content">
        <div className="wrapper">
          <Page404 />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page404Container;
