import React from 'react';
import SidebarMenu from '../components/sidebar/sidebar.component';
import CropDetail from '../components/crop-detail/crop-detail.component';

const CropDetailPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <CropDetail />
      </div>
    </>
  );
};

export default CropDetailPage;
