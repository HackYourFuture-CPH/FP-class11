import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddBatch from '../../components/batch/add-batch.component';
import EditBatchImage from '../../components/batch/edit-batch-image/edit-batch-image.component';
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
