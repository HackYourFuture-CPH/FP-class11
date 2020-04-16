/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const dayLeftController = require('../controllers/days-to-end-batch.controllers');

// ENDPOINT: /api/day-left/:batchId :GET to get Days left to end the batch
router.get('/:batchId', (req, res, next) => {
  dayLeftController
    .getDayLeftToEndBatch(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
