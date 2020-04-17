const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getBatches = async () => {
  try {
    return await knex('batches').select('id', 'customer_name');
  } catch (error) {
    return error.message;
  }
};
const getBatchById = async (batchId) => {
  try {
    const batch = await knex('batches')
      .select('*')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }
    return batch;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getBatches,
  getBatchById,
};
