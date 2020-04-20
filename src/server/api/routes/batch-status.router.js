/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// controllers
const batchStatusController = require('../controllers/batch-status.controller');

// ENDPOINT: /api/batch-status/:batchId :GET to get status messages for a batch with batchId
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchStatusController
    .getBatchStatus(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
