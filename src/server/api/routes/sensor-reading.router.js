/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const sensorReadingController = require('../controllers/sensor-readings.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /sensor-reading/{materialId}:
 *   get:
 *     summary: Get sensor readings.
 *     description:
 *       "Get sensor readings."
 *     tags:
 *       - SensorReading
 *     operationId: materialId
 *     produces: application/json
 *     parameters:
 *       - name: materialId
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful request
 *       5XX:
 *         description: Unexpected error.

 */
// ENDPOINT: /api/sensor-reading/:materialId :GET to get sensor reading
router.get('/:materialId', checkIfAuthenticated, (req, res, next) => {
  sensorReadingController
    .getSensorReadingByMaterialId(req.params.materialId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
