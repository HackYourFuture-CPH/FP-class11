import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddBatch from '../../components/add-batch/add-batch.component';
import EditBatchImage from '../../components/edit-batch-image/edit-batch-image.component';
import Footer from '../../components/footer/footer.component';

const BatchDetailPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isActive={true} isUser={true} />
      </div>
      <div>
        <AddBatch />
        <EditBatchImage />
        <Footer />
      </div>
    </>
  );
};

export default BatchDetailPage;
