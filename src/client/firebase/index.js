import FirebaseContext, { FirebaseConsumer } from './context';
import Firebase from './auth';

Firebase.init();

export default Firebase;
export { FirebaseContext, FirebaseConsumer };
