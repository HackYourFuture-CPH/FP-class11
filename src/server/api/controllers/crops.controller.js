const knex = require('../../config/db');

const getAllCrops = async () => {
  try {
    return knex('crops').select(
      'crops.id',
      'crops.name',
      'crops.plant_variety',
    );
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllCrops,
};
