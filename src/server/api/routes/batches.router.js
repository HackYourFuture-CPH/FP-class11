/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchesController = require('../controllers/batches.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/batches/ :GET to get all batches - id, customer_name
router.get('/', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getBatches()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/batches/all :GET to get all batches
router.get('/all', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getAllBatches()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/batches/:id :GET to get specific batch by id
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getBatchById(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
