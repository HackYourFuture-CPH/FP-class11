import React, { useContext } from 'react';
import SidebarMenu from '../side-navigation/sidebar.component';
import AddBatch from '../add-batch/add-batch.component';
import Footer from '../footer/footer.component';
import { addBatchContext } from '../../containers/add-batch-page/add-batch-context';
import UserRoleContext from '../../helpers/UserRoleContext';
import Logout from '../logout/logout.component';
import Firebase from '../../firebase/index';
import './add-batch-page.style.css';
import { useHistory } from 'react-router-dom';

const AddBatchPage = () => {
  const {
    cropId,
    setCropId,
    setStartSeedDate,
    setCustomerName,
    setSeedPot,
    createBatch,
    logoutModal,
    setLogoutModal,
  } = useContext(addBatchContext);
  const { userRole, userName } = useContext(UserRoleContext);
  const history = useHistory();
  return (
    <>
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
      <div className="content">
        <div className="wrapper add-batch">
          <AddBatch
            cropId={cropId}
            setCropId={setCropId}
            setStartSeedDate={setStartSeedDate}
            setSeedPot={setSeedPot}
            setCustomerName={setCustomerName}
            handleSubmit={createBatch}
          />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default AddBatchPage;
