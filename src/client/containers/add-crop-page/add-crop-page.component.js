import React from 'react';
import SidebarMenu from '../components/sidebar/sidebar.component';
import AddCrop from '../../components/add-crop/add-crop.component';

const AddCropPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <AddCrop />
      </div>
    </>
  );
};

export default AddCropPage;
