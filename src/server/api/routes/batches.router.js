/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// controllers
const batchesController = require('../controllers/batches.controller');
const batchController = require('../controllers/batches.controller');

// ENDPOINT: /api/batches/ :GET to get all batches
router.get('/', (req, res, next) => {
  batchesController
    .getBatches()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/batch/:id :GET to get one module
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchController
    .getBatchById(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
