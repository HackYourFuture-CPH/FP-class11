/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const ROLES = require('../../constants/roles');

// controllers
const createCropController = require('../controllers/create-crop.controller');

// ENDPOINT: /api/create-batch :POST to create a batch
router.post(
  '/',
  checkIfAuthorized(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  (req, res, next) => {
    console.log(req.body);
    createCropController
      .createCrop(req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
