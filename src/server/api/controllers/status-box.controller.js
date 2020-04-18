const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment');

const currentStageMessage = async (batchId) => {
  const batchesStages = await knex('batches')
    .join('crop_stages', 'crop_stages.fk_crops_id', '=', 'batches.fk_crop_id')
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
  const currentStageName =
    filterDurationLessThanToday.length > 0
      ? filterDurationLessThanToday[0].name
      : 'delivered';
  if (currentStageMessage.length === 0) {
    throw new Error(`incorrect entry with the id of ${batchId}`, 404);
  }
  if (currentStageName === 'delivered') return `${currentStageName}`;
  return `${currentStageName} - Day ${currentDay}`;
};

const getCurrentStage = async (batchId) => {
  try {
    return await currentStageMessage(batchId);
  } catch (error) {
    return error.message;
  }
};

const getDaysTilHarvest = async (batchId) => {
  try {
    const batchesStages = await knex('batches')
      .join('crop_stages', 'crop_stages.fk_crops_id', '=', 'batches.fk_crop_id')
      .select(
        'crop_stages.id',
        'crop_stages.name',
        'crop_stages.duration',
        'batches.seeding_date',
      )
      .where('batches.id', batchId);
    if (batchesStages.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }

    const cropStagedId = [1, 2, 3];
    const durationDayBeforeHarvest = batchesStages
      .filter((cropStages) => cropStagedId.includes(cropStages.id))
      .reduce((durationSum, cropStage) => {
        return durationSum + cropStage.duration;
      }, 0);
    const todayDate = moment();
    const seedingDate = moment(batchesStages[0].seeding_date);
    const harvestStartDate = seedingDate.add(durationDayBeforeHarvest, 'days');
    const daysTilHarvestFromToday =
      moment(harvestStartDate).diff(todayDate, 'days') + 1;

    return `In ${daysTilHarvestFromToday} days`;
  } catch (error) {
    return error.message;
  }
};

const getProductionStartDate = async (batchId) => {
  try {
    const productionStartDate = await knex('batches')
      .select('batches.seeding_date')
      .where('batches.id', batchId);
    if (productionStartDate.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }
    return productionStartDate;
  } catch (error) {
    return error.message;
  }
};

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
      .where('fk_crop_id', batch[0].fk_crop_id);
    const start = moment(batch[0].seeding_date);
    const end = moment();
    const daysPassed = end.diff(start, 'days') + 1;
    const daysLeft = totalDays[0].duration - daysPassed;
    return `Days left to end the batch: ${daysLeft} days`;
  } catch (error) {
    return Error.message;
  }
};

const getProductionEndDate = async (batchId) => {
  try {
    const batch = await knex('batches')
      .select('seeding_date', 'fk_crop_id')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }

    const totalDays = await knex('crop_stages')
      .sum('duration as duration')
      .where('fk_crop_id', batch[0].fk_crop_id);
    const start = moment(batch[0].seeding_date);
    const end = moment();
    const daysPassed = end.diff(start, 'days');
    const daysLeft = totalDays[0].duration - daysPassed;
    const productionEndDate = start.add(daysLeft, 'days');
    return `Production End Date: ${productionEndDate}`;
  } catch (error) {
    return Error.message;
  }
};

module.exports = {
  getCurrentStage,
  getDaysTilHarvest,
  getProductionStartDate,
  getDayLeftToEndBatch,
  getProductionEndDate,
};
