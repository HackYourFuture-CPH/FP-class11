import React, { useState, useEffect, useContext } from 'react';
import UserRoleContext from '../../helpers/UserRoleContext';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';
import { useHistory } from 'react-router-dom';
import Firebase from '../../firebase/index';

import SidebarMenu from '../../components/side-navigation/sidebar.component';
import Logout from '../../components/logout/logout.component';
import Button from '../../components/button/button.component';
import ShowButton from '../../components/list-batches-buttons/list-batches-button-show.component';
import SortButton from '../../components/list-batches-buttons/list-batches-button-sort.component';
import ListBatches from '../../components/list-batches/list-batches.component';
import Footer from '../../components/footer/footer.component';
import LoaderAnimation from '../../components/loader-animation/loader-animation.component';
import './list-batches-page.style.css';

export default function ListBatchesPage() {
  const history = useHistory();
  const { userRole, userName } = useContext(UserRoleContext);

  const [logoutModal, setLogoutModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ListBatchData, setListBatchData] = useState(null);

  const fetchData = async () => {
    const headers = await getTokenWithHeaders();

    const batchesData = await fetch('/api/batches?detailed=true', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setListBatchData(batchesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userRole && userName && ListBatchData) setLoading(false);
  }, [userRole, userName, ListBatchData]);

  return loading ? (
    <LoaderAnimation />
  ) : (
    <div className="batch-list">
      <div>
        <SidebarMenu
          isActive={false}
          isVisible={
            userRole && (userRole === 'admin' || userRole === 'super_admin')
          }
          showDashboard={() => history.push('/dashboard')}
          showBatchDetails={() => history.push('/batch-details')}
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
        <header>
          <h1>BATCH LIST</h1>
        </header>
        <navigation>
          <div className="filter-options">
            <div className="filter-labels">Show:</div>
            <div className="filter-buttons">
              <ShowButton
                buttons={[
                  { id: 1, label: 'Active Batches' },
                  { id: 2, label: 'All Batches' },
                ]}
                defaultSelection={{ id: 2 }}
              />
            </div>
          </div>
          <div className='filter-options'>
            <div className="filter-labels">Sort by:</div>
            <div className="filter-buttons">
              <SortButton
                buttons={[
                  { id: 1, label: 'Customer Name' },
                  { id: 2, label: 'Seeding Date' },
                ]}
                defaultSelection={{ id: 2 }}
              />
            </div>
          </div>
        </navigation>
        <div className='batch-table'>
          <ListBatches batchData={ListBatchData} />
          </div>
          <div className="export-button">
            <Button type="primary">Export data ▾</Button>
          </div>
        <Footer />
      </div>
    </div>
  );
}
