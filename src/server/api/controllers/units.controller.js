const knex = require('../../config/db');

const getUnits = async () => {
  try {
    const units = await knex('units').select('*');
    return units;
  } catch (error) {
    return error.message;
  }
};

module.exports = { getUnits };
