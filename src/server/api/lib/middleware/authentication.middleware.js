const firebaseAdmin = require('./firebase-admin/firebase.admin');
const { getAuthToken } = require('./getToken.backend');

const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { token } = req;
      const userInfo = await firebaseAdmin.auth().verifyIdToken(token);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res.status(401).send({
        error: 'You are not authorized to view this content',
      });
    }
  });
};

module.exports = {
  checkIfAuthenticated,
};
