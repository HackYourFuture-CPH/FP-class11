import React from 'react';
import { useHistory } from 'react-router-dom';

import firebase from '../../firebase/auth';

function Dashboard() {
  const history = useHistory();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        type="submit"
        onClick={() => {
          firebase.signOut();
          history.push('/');
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;
