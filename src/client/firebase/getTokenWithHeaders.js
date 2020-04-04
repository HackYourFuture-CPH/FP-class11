import Firebase from './auth';

export const getTokenWithHeaders = async () => {
  const token = await Firebase.getAuth().currentUser.getIdToken();
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Sowmya ${token}`,
  };
  return headers;
};
