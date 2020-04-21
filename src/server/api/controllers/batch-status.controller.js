const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment');

const getBatchesStages = async (batchId) => {
  try {
    const batchesStages = await knex('batches')
      .join('crop_stages', 'crop_stages.fk_crop_id', '=', 'batches.fk_crop_id')
      .select(
        'crop_stages.name',
        'crop_stages.duration',
        'batches.seeding_date',
      )
      .where('batches.id', batchId);
    if (batchesStages.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }
    return batchesStages;
  } catch (error) {
    return error.message;
  }
};

const currentStage = async (batchId, batchesStages) => {
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
  if (currentStage.length === 0) {
    throw new Error(`incorrect entry with the id of ${batchId}`, 404);
  }
  if (currentStageName === 'delivered') return { status: currentStageName };
  return { status: currentStageName, day: currentDay };
};

const getDaysTilHarvest = async (batchesStages) => {
  try {
    const [harvestId] = await knex('crop_stages')
      .select('id')
      .where('name', 'harvest');
    const durationDaysBeforeHarvest = batchesStages
      .filter((stage) => stage.id < harvestId.id)
      .reduce((durationSum, cropStage) => {
        return durationSum + cropStage.duration;
      }, 0);
    const todayDate = moment();
    const seedingDate = moment(batchesStages[0].seeding_date);
    const harvestStartDate = seedingDate.add(durationDaysBeforeHarvest, 'days');
    if (
      moment(todayDate).format('DD-MM-YYYY') >=
      moment(harvestStartDate).format('DD-MM-YYYY')
    )
      return `Harvest started`;
    const daysTilHarvestFromToday =
      moment(harvestStartDate).diff(todayDate, 'days') + 1;

    return daysTilHarvestFromToday;
  } catch (error) {
    return error.message;
  }
};

const getProductionStartDate = async (batchesStages) => {
  try {
    return moment(batchesStages[0].seeding_date).format('DD-MM-YYYY');
  } catch (error) {
    return error.message;
  }
};

const getBatch = async (batchId) => {
  try {
    const [batch] = await knex('batches')
      .select('seeding_date', 'fk_crop_id')
      .where('id', batchId);
    if (batch.length === 0) {
      throw new Error(`incorrect entry with the id of ${batchId}`, 404);
    }
    return batch;
  } catch (error) {
    return error.message;
  }
};

const getTotalDays = async (cropId) => {
  try {
    const [totalDays] = await knex('crop_stages')
      .sum('duration as duration')
      .where('fk_crop_id', cropId);
    if (totalDays.length === 0) {
      throw new Error(`incorrect entry with the id of ${cropId}`, 404);
    }
    return totalDays;
  } catch (error) {
    return error.message;
  }
};

const getDayLeftToEndBatch = async (batch, totalDays) => {
  try {
    const start = moment(batch.seeding_date);
    const end = moment();
    const daysPassed = end.diff(start, 'days') + 1;
    const daysLeft = totalDays.duration - daysPassed;
    return daysLeft;
  } catch (error) {
    return error.message;
  }
};

const getProductionEndDate = async (batch, totalDays) => {
  try {
    const start = moment(batch.seeding_date);
    const productionEndDate = start.add(totalDays.duration, 'days') - 1;
    return moment(productionEndDate).format('DD-MM-YYYY');
  } catch (error) {
    return error.message;
  }
};

const getBatchStatus = async (batchId) => {
  try {
    const batchesStages = await getBatchesStages(batchId);
    const batch = await getBatch(batchId);
    const totalDays = await getTotalDays(batch.fk_crop_id);
    return {
      daysLeftToHarvest: await getDaysTilHarvest(batchesStages),
      daysLeftToEndBatch: await getDayLeftToEndBatch(batch, totalDays),
      currentStage: await currentStage(batchId, batchesStages),
      productionStartDate: await getProductionStartDate(batchesStages),
      productionEndDate: await getProductionEndDate(batch, totalDays),
    };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getBatchStatus,
};
