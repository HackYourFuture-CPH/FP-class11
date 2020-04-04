import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddCrop from '../../components/add-crop/add-crop.component';
import AddCropImage from '../../components/add-crop-image/add-crop-image.component';
import Footer from '../../components/footer/footer.component';

const AddCropPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <AddCrop />
        <AddCropImage />
        <Footer />
      </div>
    </>
  );
};

export default AddCropPage;
