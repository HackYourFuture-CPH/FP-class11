const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment');

const currentStage = async (batchId) => {
  const batchesStages = await knex('batches')
    .join('crop_stages', 'crop_stages.fk_crop_id', '=', 'batches.fk_crop_id')
    .join('crops', 'crops.id', '=', 'crop_stages.fk_crop_id')
    .select('crop_stages.name', 'crop_stages.duration', 'batches.seeding_date')
    .where('batches.id', batchId);
  if (batchesStages.length === 0) {
    throw new Error(`incorrect entry with the id of ${batchId}`, 404);
  }
  /* eslint-disable no-param-reassign */
  batchesStages.reduce((sum, batch) => {
    batch.duration += sum;
    return batch.duration;
  }, 0);
  /* eslint-enable no-param-reassign */
  const today = moment();
  const seedingDate = moment(batchesStages[0].seeding_date);
  const currentDay = today.diff(seedingDate, 'days') + 1;
  const filterDurationLessThanToday = batchesStages.filter(
    (batch) => batch.duration >= currentDay,
  );
  let currentStageName = '';
  if (today < seedingDate) currentStageName = 'queued';
  else
    currentStageName =
      filterDurationLessThanToday.length > 0
        ? filterDurationLessThanToday[0].name
        : 'delivered';
  if (currentStage.length === 0) {
    throw new Error(`incorrect entry with the id of ${batchId}`, 404);
  }
  return currentStageName;
};

const getDefaultValues = async (batchId, requestedStage) => {
  try {
    let stage = null;
    if (requestedStage) {
      if (requestedStage === 'current') stage = await currentStage(batchId);
      else stage = requestedStage;
    }
    if (stage === 'delivered' || stage === 'queued') return [];
    const query = knex('crop_stage_default_values')
      .join(
        'batches',
        'batches.fk_crop_id',
        '=',
        'crop_stage_default_values.fk_crop_id',
      )
      .join('crop_stages', function() {
        this.on(
          'crop_stages.fk_crop_id',
          '=',
          'crop_stage_default_values.fk_crop_id',
        ).andOn(
          'crop_stages.id',
          '=',
          'crop_stage_default_values.fk_crop_stage_id',
        );
      })
      .select(
        'crop_stages.name',
        'crop_stage_default_values.parameter',
        'crop_stage_default_values.min_value',
        'crop_stage_default_values.optimum_value',
        'crop_stage_default_values.max_value',
      )
      .where('batches.id', batchId);

    if (stage) query.andWhere('crop_stages.name', stage);
    const defaultValuesForBatch = await query;

    if (defaultValuesForBatch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }

    return defaultValuesForBatch;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getDefaultValues,
};
