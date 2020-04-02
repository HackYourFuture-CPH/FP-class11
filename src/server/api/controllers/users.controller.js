const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

// get all users
const getUsers = async () => {
  try {
    return await knex('users').select();
  } catch (error) {
    return error.message;
  }
};

// get the role for specific uid
const getRole = async (uid) => {
  try {
    const role = await knex('roles')
      .join('user_roles', 'user_roles.fk_role_id', '=', 'roles.id')
      .join('users', 'users.id', '=', 'user_roles.fk_user_id')
      .select('roles.name')
      .where('users.uid', uid);
    if (role.length === 0) {
      throw new Error(`incorrect entry with the uid of ${uid}`, 404);
    }
    return role;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUsers,
  getRole,
};
