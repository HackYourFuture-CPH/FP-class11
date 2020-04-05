const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getCropStageDefaultValuesByCropId = async (cropId) => {
  try {
    const cropStageDefaultValues = await knex('crop_stage_default_values')
      .select('*')
      .where('fk_crop_id', cropId);
    if (cropStageDefaultValues.length === 0) {
      throw new Error(`incorrect entry with the id of ${cropId}`, 404);
    }
    return cropStageDefaultValues;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCropStageDefaultValuesByCropId,
};
