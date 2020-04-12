const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getSensorReadingByMaterialId = async (materialId) => {
  try {
    const sensorReading = await knex('sensors_readings')
      .select('*')
      .where('fk_material_id', materialId);
    if (sensorReading.length === 0) {
      throw new Error(`The given id not found`, 404);
    }
    return sensorReading;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getSensorReadingByMaterialId,
};
