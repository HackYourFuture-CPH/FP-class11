/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const ROLES = require('../../constants/roles');

// controllers
const createBatchController = require('../controllers/create-batch.controller');

// ENDPOINT: /api/create-batch :POST to create a batch
router.post(
  '/',
  checkIfAuthorized(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  (req, res, next) => {
    console.log(req.body);
    createBatchController
      .createBatch(req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
