const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const createBatch = async (cropId, userId) => {
  try {
    const batch = await knex('batches').insert({
      fk_crop_id: cropId,
      fk_user_id: userId,
    });
    if (cropId <= 0) {
      throw new Error(`incorrect entry with the id of ${cropId}`, 404);
    } else if (userId <= 0) {
      throw new Error(`incorrect entry with the id of ${userId}`, 404);
    }
    return batch;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createBatch,
};
