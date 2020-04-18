const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchesController = require('../controllers/batches.controller');
const batchController = require('../controllers/batches.controller');

/**
 * @swagger
 * /batches/:
 *   get:
 *     summary: Get all batches
 *     description:
 *       Get default parameter values for all batches
 *     tags:
 *       - Batches
 *     operationId: getBatches
 *     produces: application/json
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: A batch with the specified id was not found.
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/batches/ :GET to get all batches
router.get('/', (req, res, next) => {
  batchesController
    .getBatches()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /batch/{batchId}:
 *   get:
 *     summary: Get default parameter values for a specific batch
 *     description:
 *       Get default parameter values for a specific batch by batchId
 *     tags:
 *       - BatchById
 *     operationId: getBatchById
 *     produces: application/json
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: A batch with the specified id was not found.
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/batch/:id :GET to get one module
router.get('/:batchId', (req, res, next) => {
  batchController
    .getBatchById(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
