const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

// get the role for specific uid
const getRole = async (req) => {
  const uid = req.authId;
  try {
    const role = await knex('roles')
      .join('user_roles', 'user_roles.fk_role_id', '=', 'roles.id')
      .join('users', 'users.id', '=', 'user_roles.fk_user_id')
      .select('roles.name')
      .where('users.uid', uid);
    if (role.length === 0) {
      throw new Error(`incorrect entry with this uid`, 404);
    }
    return role;
  } catch (error) {
    return error.message;
  }
};

// get user's name for a specific uid
const getName = async (req) => {
  const uid = req.authId;
  try {
    const name = await knex('users')
      .select('users.name')
      .where('users.uid', uid);
    if (name.length === 0) {
      throw new Error(`Name not found`, 404);
    }
    return name;
  } catch (error) {
    return error.message;
  }
};

// get user's name for a specific uid
const getUserId = async (req) => {
  const uid = req.authId;
  try {
    const id = await knex('users')
      .select('users.id')
      .where('users.uid', uid);
    if (id.length === 0) {
      throw new Error(`Id not found`, 404);
    }
    return id;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getRole,
  getName,
  getUserId,
};
