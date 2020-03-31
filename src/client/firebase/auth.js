import firebaseConfig from './config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

function Firebase() {
  return {
    init() {
      firebase.initializeApp(firebaseConfig);
    },
    getAuth() {
      return firebase.auth();
    },
    async signInEmailAndPassword(email, pass) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, pass);
      } catch (err) {
        return { err };
      }
      return {};
    },
    async signOut() {
      await firebase.auth().signOut();
    },
    async doPasswordReset(email) {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
      } catch (err) {
        return { err };
      }
      return {};
    },
  };
}

export default Firebase();
