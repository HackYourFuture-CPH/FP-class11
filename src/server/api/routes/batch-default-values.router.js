/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchDefaultValuesController = require('../controllers/batch-default-values.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/batch-default-values/:batchId :GET to get default values of a batch with batchId
// ENDPOINT: /api/batch-default-values/:batchId?stage=requestedStage :GET to get default values for particular stage
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchDefaultValuesController
    .getDefaultValues(req.params.batchId, req.query.stage)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
