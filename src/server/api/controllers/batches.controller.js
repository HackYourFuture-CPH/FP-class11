const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment');

const getBatches = async (detailed) => {
  try {
    if (detailed === 'true') return await getAllBatches();
    return await knex('batches').select('id', 'customer_name');
  } catch (error) {
    return error.message;
  }
};

const getBatchById = async (batchId) => {
  try {
    const batch = await knex('batches')
      .select('*')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }
    return batch;
  } catch (error) {
    return error.message;
  }
};

const currentStage = async (batchId) => {
  try {
    const batchesStages = await knex('batches')
      .join('crop_stages', 'crop_stages.fk_crop_id', '=', 'batches.fk_crop_id')
      .join('crops', 'crops.id', '=', 'crop_stages.fk_crop_id')
      .select(
        'crop_stages.name',
        'crop_stages.duration',
        'batches.seeding_date',
      )
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
    if (seedingDate > today) return 'queued';
    const currentDay = today.diff(seedingDate, 'days') + 1;
    const filterDurationLessThanToday = batchesStages.filter(
      (batch) => batch.duration >= currentDay,
    );
    const currentStageName =
      filterDurationLessThanToday.length > 0
        ? filterDurationLessThanToday[0].name
        : 'delivered';
    if (currentStage.length === 0) {
      throw new Error(
        `currentStage`,
        `incorrect entry with the id of ${batchId}`,
        404,
      );
    }
    if (currentStageName === 'delivered' || currentStageName === 'queued')
      return { stage: currentStageName, day: null };
    return { stage: currentStageName, day: currentDay };
  } catch (error) {
    if (error instanceof Error) throw error;
    console.error(error.message);
    throw new Error('currentStage', 'Something went wrong on our side.', 500);
  }
};

const getAllBatches = async () => {
  try {
    const batches = await knex('batches')
      .join('crops', 'crops.id', '=', 'fk_crop_id')
      .select(
        'batches.id',
        'crops.name',
        'crops.plant_variety',
        'batches.customer_name',
        'batches.number_of_seeded_pots',
        'batches.seeding_date',
      );
    /* eslint-disable no-param-reassign */
    const addedCurrentStageStatus = await Promise.all(
      batches.map(async (batch) => {
        let stage = {};
        let status = '';
        if (moment(batch.seeding_date) > moment()) {
          stage = { stage: 'queued', day: null };
          status = 'queued';
        } else {
          stage = await currentStage(batch.id);
          if (stage.stage === 'delivered') status = 'done';
          else status = 'active';
        }
        batch.current_stage = stage;
        batch.status = status;
        return batch;
      }),
    );
    /* eslint-enable no-param-reassign */
    if (addedCurrentStageStatus.length === 0) {
      throw new Error(`getAllBatches`, `incorrect entry`, 404);
    }
    return addedCurrentStageStatus;
  } catch (error) {
    if (error instanceof Error) throw error;
    console.error(error.message);
    throw new Error('getAllBatches', 'Something went wrong on our side.', 500);
  }
};

module.exports = {
  getBatches,
  getBatchById,
  getAllBatches,
};
