/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const batchDefaultValuesController = require('../controllers/batch-default-values.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /batch-default-values/{batchId}:
 *   get:
 *     summary: Get default values for specific batch
 *     description:
 *       'Get default values for specific batch by batchId<br /><br />
 *       Authentication\: <code>true</code><br /><br />
 *       Authorization\: <code>user</code>'
 *     tags:
 *       - Default Values
 *     operationId: getDefaultValues
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
 *        type: integer
 *        required: true
 *      - name: stage
 *        in: query
 *        description: Stage default values for a batch.
 *        required: false
 *        type: array
 *        items:
 *          type: string
 *          enum:
 *          - current
 *          - seeding
 *          - propagation
 *          - maturity
 *          - harvest
 *          - storage
 *          - delivery
 *        collectionFormat: multi
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: Not found.
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/batch-default-values/:batchId :GET to get default values of a batch with batchId
// ENDPOINT: /api/batch-default-values/:batchId?stage=requestedStage :GET to get default values for particular stage
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchDefaultValuesController
    .getDefaultValues(req.params.batchId, req.query.stage)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
