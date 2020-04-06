const knex = require('../../config/db');

const getCropStages = async () => {
  try {
    const startDate = await knex('batches').select('seeding_date');
    const stages = await knex('crop_stages').select(
      'crop_stages.name',
      'crop_stages.duration',
    );
    if (startDate.length === 0 || stages.length === 0) {
      throw new Error(`Batch or stages not found `, 404);
    }
    const currentDate = new Date().toLocaleString();
    return {
      startDate: new Date(startDate[0].seeding_date).toLocaleString(),
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
