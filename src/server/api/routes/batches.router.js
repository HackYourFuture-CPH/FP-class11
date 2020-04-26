const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchesController = require('../controllers/batches.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /batches/:
 *   get:
 *     summary: Get all batches
 *     description:
 *       Get default parameter values for all batches
 *
 *
 *       Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - Batches
 *     operationId: getBatches
 *     produces: application/json
 *     parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
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
router.get('/', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getBatches(req.query.detailed)
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
 *
 *
 *       Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - Batches
 *     operationId: getBatchById
 *     produces: application/json
 *     parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - name: batchId
 *        in: path
 *        required: true
 *        type: integer
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
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchesController
    .getBatchById(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
