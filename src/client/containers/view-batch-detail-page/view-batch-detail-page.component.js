import React from 'react';
import ViewBatchDetails from '../../components/view-batch-detail/view-batch-details.component';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import EditBatchImage from '../../components/edit-batch-image/edit-batch-image.component';
import DeleteBatch from '../../components/delete-confim/batch-delete-button.component';
import Footer from '../../components/footer/footer.component';
import image from '../../assets/images/crop-image.png';
import penImage from '../../assets/images/edit-icon.png';
import './view-batch-detail-page.style.css';
// import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';

const BatchDetailPage = () => {
  // const [crop, setCrop] = useState([]);
  // const [batch, setBatch] = useState([]);

  // const batchId = 1;

  // // Use this function to fetch APIs
  // const getData = async () => {
  //   // fetch batch api
  //   const headers = await getTokenWithHeaders();
  //   const rbatch = await fetch(`/api/batches/${batchId}`, {
  //     method: 'GET',
  //     headers,
  //   }).then((data) => data.json());
  //   console.log(rbatch);
  //   setBatch(rbatch);

  //   // fetch crop api
  //   const rcrop = await fetch(
  //     `/api/crops/${batch[0].fk_crop_id}`,
  //     {
  //       method: 'GET',
  //       headers,
  //     },
  //   ).then((data) => data.json());
  //   console.log(rcrop);
  //   setCrop(rcrop);
  // };

  // getData();

  const batch = {
    id: 2,
    seeding_date: '2020-06-01',
    number_of_seeded_pots: '1500',
    customer_name: 'KFC',
  };
  const crop = {
    name: 'Lattuce',
  };

  return (
    <>
      <page>
        <side>
          <SidebarMenu isActive={false} isVisible={true} />
        </side>
        <detail className="batchDetail-wrapper">
          <data className="batchDetail">
            <ViewBatchDetails batch={batch} crop={crop} />
          </data>
          <righpannerl className="right-panel">
            <EditBatchImage
              srcPath={image}
              srcPenPath={penImage}
              altText="A crop"
              altIconText="A icon"
            />
            <h3>{crop.name}</h3>
            <DeleteBatch />
          </righpannerl>
        </detail>
      </page>

      <Footer />
    </>
  );
};

export default BatchDetailPage;
