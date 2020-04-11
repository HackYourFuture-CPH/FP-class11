/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchesController = require('../controllers/batches.controller');

// ENDPOINT: /api/batches/ :GET to get all batches
router.get('/', (req, res, next) => {
  batchesController
    .getBatches()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
