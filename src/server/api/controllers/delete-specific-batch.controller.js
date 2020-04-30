const knex = require('../../config/db');

const deleteSpecificBatchById = async (batchId) => {
  try {
    await knex('batches')
      .where('id', '=', batchId)
      .update({ deleted_at: knex.fn.now() });
    return { message: 'deleted_at is set to today' };
  } catch (error) {
    throw error.message;
  }
};

module.exports = {
  deleteSpecificBatchById,
};
