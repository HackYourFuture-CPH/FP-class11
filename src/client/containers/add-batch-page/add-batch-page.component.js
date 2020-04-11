import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddBatch from '../../components/add-batch/add-batch.component';
import AddBatchImage from '../../components/add-batch-image/add-batch-image.component';
import Footer from '../../components/footer/footer.component';

const AddBatchPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isActive={true} isUser={true} />
      </div>
      <div>
        <AddBatch />
        <AddBatchImage />
        <Footer />
      </div>
    </>
  );
};

export default AddBatchPage;
