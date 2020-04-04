import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import AddCrop from '../../components/crop/add-crop/add-crop.component';
import EditCropImage from '../../components/crop/edit-crop-image/edit-crop-image.component';
import Footer from '../../components/footer/footer.component';

const CropDetailPage = () => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <AddCrop />
        <EditCropImage />
        <Footer />
      </div>
    </>
  );
};

export default CropDetailPage;
