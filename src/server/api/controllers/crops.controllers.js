const knex = require("../../config/db");

const getAllCrops = async () => {
  try {
    return await knex("crops").select("crops.name", "crops.plant_variety");
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllCrops
};
