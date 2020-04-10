/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const sensorReadingController = require('../controllers/sensor-readings.controller');

// ENDPOINT: /api/sensor-reading/:materialId :GET to get sensor reading
router.get('/:materialId', (req, res, next) => {
  sensorReadingController
    .getSensorReadingByMaterialId(req.params.materialId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
