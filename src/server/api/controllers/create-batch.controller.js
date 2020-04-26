const knex = require('../../config/db');
const moment = require('moment');

const createBatch = async (body) => {
  try {
    await knex('batches').insert({
      fk_crop_id: body.fk_crop_id,
      fk_user_id: body.fk_user_id,
      customer_name: body.customer_name,
      number_of_seeded_pots: body.number_of_seeded_pots,
      seeding_date: moment(body.seeding_date).format('YYYY-MM-DD HH:mm:ss'),
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
  createBatch,
};
