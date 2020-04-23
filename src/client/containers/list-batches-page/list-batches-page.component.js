import React, { useState, useEffect, useContext } from 'react';
import UserRoleContext from '../../helpers/UserRoleContext';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';

import SidebarMenu from '../../components/side-navigation/sidebar.component';
import Button from '../../components/button/button.component';
import ShowButtons from '../../components/list-batches-buttons/list-batches-button-show.component';
import SortButtons from '../../components/list-batches-buttons/list-batches-button-sort.component';
import ListBatches from '../../components/list-batches/list-batches.component';
import FormTitle from '../../components/form-title/form-title.component';
import Footer from '../../components/footer/footer.component';
import LoaderAnimation from '../../components/loader-animation/loader-animation.component';
import './list-batches-page.style.css';

const ListBatchesPage = () => {
  const { userRole, userName } = useContext(UserRoleContext);

  const [loading, setLoading] = useState(true);
  const [ListBatchData, setListBatchData] = useState(null);

  const fetchData = async () => {
    const headers = await getTokenWithHeaders();

    const fetchBatchesData = async (endpoint, setBatchesData) => {
      const batchesData = await fetch(endpoint, {
        method: 'GET',
        headers,
      }).then((data) => data.json());
      setBatchesData(batchesData);
    };

    fetchBatchesData('/api/batches/all', setListBatchData);
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
        <SidebarMenu isActive={true} isUser={true} />
      </div>
      <div className="content">
        <FormTitle title="BATCH LIST" />
        <div className="buttons">
          <ShowButtons />
          <SortButtons />
        </div>
        <main>
          <ListBatches />
          <Button type="primary">Export data ▾</Button>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ListBatchesPage;
