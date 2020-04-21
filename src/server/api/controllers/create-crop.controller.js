const knex = require('../../config/db');

const createCrop = async (body) => {
  try {
    await knex('crops').insert({
      name: body.name,
      plant_variety: body.plant_variety,
      fk_user_id: body.fk_user_id,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null,
    });
    return {
      successful: true,
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createCrop,
};
