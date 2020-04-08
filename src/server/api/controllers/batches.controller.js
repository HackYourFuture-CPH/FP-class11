const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');

const getBatches = async () => {
  try {
    return await knex('batches').select('id', 'customer_name');
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getBatches,
};
