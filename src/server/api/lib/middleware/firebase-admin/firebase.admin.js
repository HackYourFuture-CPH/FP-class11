const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    project_id: process.env.PROJECT_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
  }),
});

module.exports = firebaseAdmin;
