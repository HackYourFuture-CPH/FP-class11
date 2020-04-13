const knex = require('../../config/db');

const deleteSpecificBatchById = async (batchId) => {
  try {
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
