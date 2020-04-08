const knex = require('../../config/db');

const getCropStages = async (batchId) => {
  try {
    const batch = await knex('batches')
      .select('seeding_date', 'fk_crop_id')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`Batch not found `, 404);
    }
    const stages = await knex('crop_stages')
      .select('name', 'duration')
      .where('fk_crop_id', batch[0].fk_crop_id);
    if (stages.length === 0) {
      throw new Error(`No crop stages found `, 404);
    }
    const currentDate = new Date().toLocaleString();
    return {
      startDate: new Date(batch[0].seeding_date).toLocaleString(),
      currentDate,
      stages,
    };
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getCropStages,
};
