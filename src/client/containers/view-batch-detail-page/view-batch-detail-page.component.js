import React, { useState, useEffect } from 'react';
import ViewBatchDetails from '../../components/view-batch-detail/view-batch-details.component';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import EditBatchImage from '../../components/edit-batch-image/edit-batch-image.component';
import DeleteBatch from '../../components/delete-confim/batch-delete-button.component';
import Footer from '../../components/footer/footer.component';
import image from '../../assets/images/crop-image.png';
import penImage from '../../assets/images/edit-icon.png';
import './view-batch-detail-page.style.css';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';
import { useParams } from 'react-router-dom';

const BatchDetailPage = () => {
  const [crop, setCrop] = useState(null);
  const [batch, setBatch] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const headers = await getTokenWithHeaders();
      const b0 = await fetch(`/api/batch/${id}`, {
        method: 'GET',
        headers,
      })
        .then((data) => data.json())
        .then((b) => {
          setBatch(b[0]);
          return b[0];
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));

      await fetch(`/api/crops`, {
        method: 'GET',
        headers,
      })
        .then((data) => data.json())
        .then((crops) => {
          const referencedCrop = crops.filter((c) => c.id === b0.fk_crop_id);
          setCrop(referencedCrop[0] ? referencedCrop[0] : null);
        })

        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarMenu isActive={false} isVisible={true} />
      {batch && crop ? (
        <div className="batchDetail-wrapper">
          <div className="batchDetail">
            <ViewBatchDetails batch={batch} crop={crop} />
          </div>
          <div className="right-panel">
            <EditBatchImage
              srcPath={image}
              srcPenPath={penImage}
              altText="A crop"
              altIconText="A icon"
            />
            <h3>{crop.name}</h3>
            <DeleteBatch />
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default BatchDetailPage;
