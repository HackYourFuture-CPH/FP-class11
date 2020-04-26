/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// controllers
const batchesController = require('../controllers/batches.controller');

// ENDPOINT: /api/batches/ :GET to get all batches - id, customer_name
// if /api/batches?detailed=true :GET to get all batches - id, name, plant_variety, customer_name, number_of_seeded_pots, seeding_date, current_stage, status
router.get('/', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getBatches(req.query.detailed)
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
