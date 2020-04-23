import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddBatch from '../../components/add-batch/add-batch.component';
import Footer from '../../components/footer/footer.component';
import './add-batch-page.style.css';

const AddBatchPage = () => {
  return (
    <>
      <div className="batch-page-nav">
        <SidebarMenu isActive={false} isUser={true} />
      </div>
      <div>
        <div className="add-batch">
          <AddBatch />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddBatchPage;
