const knex = require('../../config/db');

const getCropStages = async () => {
  try {
    const startDate = await knex('batches')
      .select('seeding_date')
      .where({ id: '31' });
    const stages = await knex('crop_stages').select(
      'crop_stages.name',
      'crop_stages.duration',
    );
    const date = new Date();
    return {
      startDate: startDate[0].seeding_date,
      date,
      stages,
    };
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getCropStages,
};
