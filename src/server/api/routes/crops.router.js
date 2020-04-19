/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

// controllers
const cropsController = require('../controllers/crops.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/crops/ :GET to get all crops
router.get('/', checkIfAuthenticated, (req, res, next) => {
  cropsController
    .getAllCrops()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
