/* eslint-disable no-console */
import React, { useState } from 'react';
import { addBatchContext } from './add-batch-context';
import AddBatchPage from '../../components/add-batch-page/add-batch-page.component';

import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';

const AddBatchContainer = () => {
  const [cropId, setCropId] = useState(null);
  const [startSeedDate, setStartSeedDate] = useState('');
  const [seedPot, setSeedPot] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [logoutModal, setLogoutModal] = useState(false);

  const createBatch = async (e) => {
    e.preventDefault();
    const dateTime = new Date(startSeedDate)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    setStartSeedDate(dateTime);
    const headers = await getTokenWithHeaders();
    let userId = await fetch('api/users/id', {
      method: 'GET',
      headers,
    })
      .then((id) => {
        return id.json();
      })
      .catch((error) => {
        return error;
      });
    userId = userId[0].id;
    await fetch('api/create-batch', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        fk_crop_id: cropId,
        fk_user_id: userId,
        customer_name: customerName,
        number_of_seeded_pots: seedPot,
        seeding_date: startSeedDate,
      }),
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <>
      <addBatchContext.Provider
        value={{
          cropId,
          setStartSeedDate,
          setCropId,
          setCustomerName,
          setSeedPot,
          createBatch,
          logoutModal,
          setLogoutModal,
        }}
      >
        <AddBatchPage />
      </addBatchContext.Provider>
    </>
  );
};

export default AddBatchContainer;
