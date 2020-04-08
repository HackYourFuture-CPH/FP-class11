const firebaseAdmin = require('./firebase-admin/firebase.admin');
const { getAuthToken } = require('./getToken.backend');
const knex = require('../../../config/db');
const Error = require('../utils/http-error');

const checkIfAuthorized = (...permittedRoles) => {
  return async (req, res, next) => {
    getAuthToken(req, res, async () => {
      try {
        const { token } = req;
        const userInfo = await firebaseAdmin.auth().verifyIdToken(token);
        const usersData = await knex('users')
          .join('user_roles', 'user_roles.fk_user_id', '=', 'users.id')
          .join('roles', 'roles.id', '=', 'user_roles.fk_role_id')
          .select('users.uid', 'roles.name')
          .where('users.uid', userInfo.uid);
        const user = await usersData[0];

        if (user) {
          if (permittedRoles.includes(user.name)) {
            req.user = userInfo;
            return next();
          }
          throw new Error('unauthorized');
        }
      } catch (e) {
        return res
          .status(401)
          .send({ error: 'You are not authorized to make this request' });
      }
    });
  };
};
module.exports = {
  checkIfAuthorized,
};
