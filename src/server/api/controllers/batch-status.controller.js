const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment');

const getBatchesStages = async (batchId) => {
  try {
    const batchesStages = await knex('batches')
      .join('crop_stages', 'crop_stages.fk_crop_id', '=', 'batches.fk_crop_id')
      .join('crops', 'crops.id', '=', 'crop_stages.fk_crop_id')
      .select(
        'crop_stages.id',
        'crop_stages.name',
        'crop_stages.duration',
        'batches.seeding_date',
        'crop_stages.fk_crop_id',
      )
      .where('batches.id', batchId);
    if (batchesStages.length === 0) {
      throw new Error(
        `getBatchesStages`,
        `incorrect entry with the id of ${batchId}`,
        404,
      );
    }
    return batchesStages;
  } catch (error) {
    if (error instanceof Error) throw error;
    console.error(error.message);
    throw new Error(
      'getBatchesStages',
      'Something went wrong on our side.',
      500,
    );
  }
};

const currentStage = async (batchId, batchesStages, seedingDate) => {
  try {
    let durationSum = 0;
    const formattedBatchesStages = batchesStages.map((batch) => {
      const formattedBatch = {
        ...batch,
        duration: batch.duration + durationSum,
      };
      durationSum += batch.duration;
      return formattedBatch;
    });
    const today = moment();
    const currentDay = today.diff(moment(seedingDate), 'days') + 1;
    const filterDurationLessThanToday = formattedBatchesStages.filter(
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
      throw new Error(
        `currentStage`,
        `incorrect entry with the id of ${batchId}`,
        404,
      );
    }
    if (currentStageName === 'delivered' || currentStageName === 'queued')
      return { status: currentStageName, day: null };
    return { status: currentStageName, day: currentDay };
  } catch (error) {
    if (error instanceof Error) throw error;
    console.error(error.message);
    throw new Error('currentStage', 'Something went wrong on our side.', 500);
  }
};

const getDaysTilHarvest = async (batchesStages, seedingDate) => {
  const [harvestId] = await knex('crop_stages')
    .select('id')
    .where('name', 'harvest');
  const durationDaysBeforeHarvest = batchesStages
    .filter((stage) => stage.id < harvestId.id)
    .reduce((durationSum, cropStage) => {
      return durationSum + cropStage.duration;
    }, 0);
  const todayDate = moment();
  const harvestStartDate = moment(seedingDate).add(
    durationDaysBeforeHarvest,
    'days',
  );

  if (
    todayDate.startOf('day') >= harvestStartDate.startOf('day') ||
    todayDate < seedingDate
  )
    return null;
  const daysTilHarvestFromToday = moment(harvestStartDate).diff(
    todayDate,
    'days',
  );

  return daysTilHarvestFromToday;
};

const getProductionStartDate = async (seedingDate) => {
  return moment(seedingDate).format('DD-MM-YYYY');
};

const getTotalDays = async (batchesStages) => {
  try {
    const [totalDays] = await knex('crop_stages')
      .sum('duration as duration')
      .where('fk_crop_id', batchesStages[0].fk_crop_id);
    if (totalDays.length === 0) {
      throw new Error(
        `getTotalDays`,
        `incorrect entry with the id of ${batchesStages.fk_crop_id}`,
        404,
      );
    }
    return totalDays;
  } catch (error) {
    if (error instanceof Error) throw error;
    console.error(error.message);
    throw new Error('getTotalDays', 'Something went wrong on our side.', 500);
  }
};

const getDayLeftToEndBatch = async (seedingDate, totalDays) => {
  const start = moment(seedingDate);
  const end = moment();
  const daysPassed = end.diff(start, 'days') + 1;
  const daysLeft = totalDays.duration - daysPassed;
  if (daysLeft < 0 || end < start) return null;
  return daysLeft;
};

const getProductionEndDate = async (seedingDate, totalDays) => {
  const start = moment(seedingDate);
  const productionEndDate = start.add(totalDays.duration, 'days') - 1;
  return moment(productionEndDate).format('DD-MM-YYYY');
};

const getBatchStatus = async (batchId) => {
  const batchesStages = await getBatchesStages(batchId);
  const seedingDate = batchesStages[0].seeding_date;
  const totalDays = await getTotalDays(batchesStages);
  return {
    daysLeftToHarvest: await getDaysTilHarvest(batchesStages, seedingDate),
    daysLeftToEndBatch: await getDayLeftToEndBatch(seedingDate, totalDays),
    currentStage: await currentStage(batchId, batchesStages, seedingDate),
    productionStartDate: await getProductionStartDate(seedingDate),
    productionEndDate: await getProductionEndDate(seedingDate, totalDays),
  };
};

module.exports = {
  getBatchStatus,
};
