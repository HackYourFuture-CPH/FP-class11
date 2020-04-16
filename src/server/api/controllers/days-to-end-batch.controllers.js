const knex = require('../../config/db');

const Error = require('../lib/utils/http-error');

const moment = require('moment');

const getDayLeftToEndBatch = async (batchId) => {
  try {
    const batch = await knex('batches')
      .select('seeding_date', 'fk_crop_id')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }

    const totalDays = await knex('crop_stages')
      .sum('duration as duration')
      .where('fk_crops_id', batch[0].fk_crop_id);
    const start = moment(batch[0].seeding_date);
    const end = moment();
    const daysPassed = end.diff(start, 'days');
    const daysLeft = totalDays[0].duration - daysPassed;
    return `${daysLeft} days`;
  } catch (error) {
    return Error.message;
  }
};

module.exports = {
  getDayLeftToEndBatch,
};
