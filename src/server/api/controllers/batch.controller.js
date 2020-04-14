const knex = require('../../config/db');
const Roles = require('../../constants');

const Error = require('../lib/utils/http-error');

const deleteSpecificBatchById = async (batchId, res, next) => {
  try {
    const user = (await Roles.SUPER_ADMIN) === 'super_admin';
    if (!user) return next(new Error('User have no rights to delete'));
    await knex('batches_table')
      .where({ id: batchId })
      .del()
      .forUpdate()
      .insert([{ deleted_at: new Date().toLocaleString() }], ['batchId'])
      .into('batches_table');
    return 'the batch is deleted';
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  deleteSpecificBatchById,
};
