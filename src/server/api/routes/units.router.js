/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const unitsController = require('../controllers/units.controller');

// ENDPOINT: /api/units :GET to get all units

router.get('/', (req, res, next) => {
  unitsController
    .getUnits()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
