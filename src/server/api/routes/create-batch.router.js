/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const createBatchController = require('../controllers/create-batch.controller');

// ENDPOINT: /api/modules/:cropId :GET to get one crop's default values
router.post('/create-batch', (req, res, next) => {
  createBatchController
    .createBatch(
      req.params.cropId,
      req.params.userId,
      req.params.customerName,
      req.params.seedPot,
      req.params.startSeedDate,
    )
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
