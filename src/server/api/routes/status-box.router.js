/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// controllers
const statusBoxController = require('../controllers/status-box.controller');

// ENDPOINT: /api/status-box/current-stage/:batchId :GET to get current stage message of a batch with batchId
router.get(
  '/current-stage/:batchId',
  checkIfAuthenticated,
  (req, res, next) => {
    statusBoxController
      .getCurrentStage(req.params.batchId)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
