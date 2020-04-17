import Firebase from '../firebase/index';

export default async function signInAsDefaultUser() {
  await Firebase.signInEmailAndPassword(
    process.env.DEFAULT_USER,
    process.env.DEFAULT_PASSWORD,
  );
}
