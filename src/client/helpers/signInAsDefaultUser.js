import Firebase from '../firebase/index';

export default async function signInAsDefaultUser() {
  await Firebase.signInEmailAndPassword(
    process.env.REACT_APP_DEFAULT_USER,
    process.env.REACT_APP_DEFAULT_PASSWORD,
  );
}
