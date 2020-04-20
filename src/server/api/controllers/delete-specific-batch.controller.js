const knex = require('../../config/db');

const deleteSpecificBatchById = async (batchId) => {
  try {
    await knex('batches')
      .where({ id: batchId })
      .del()
      .forUpdate()
      .insert([{ deleted_at: new Date().toLocaleString() }], ['batchId'])
      .into('batches');
    return 'The batch is deleted';
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  deleteSpecificBatchById,
};
