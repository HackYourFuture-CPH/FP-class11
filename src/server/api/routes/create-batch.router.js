/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const createBatchController = require('../controllers/create-batch.controller');

// ENDPOINT: /api/modules/:cropId :GET to get one crop's default values
router.get('/:cropId', (req, res, next) => {
  createBatchController
    .createBatch(req.params.cropId, req.params.userId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
