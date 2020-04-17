/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchController = require('../controllers/batches.controller');
const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/batch/:id :GET to get one module
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchController
    .getBatchById(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
