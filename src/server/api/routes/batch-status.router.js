/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// controllers
const batchStatusController = require('../controllers/batch-status.controller');

/**
 * @swagger
 * /batch-status/{batchId}:
 *   get:
 *     summary: Get batch status for specific batch
 *     description:
 *       'Get batch status for specific batch by batchId<br /><br />
 *       Authentication\: <code>true</code><br /><br />
 *       Authorization\:  <code>user</code>'
 *     tags:
 *       - Batches
 *     operationId: getBatchStatus
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
 *     security:
 *        fireabse_auth:
 *        - read
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
// ENDPOINT: /api/batch-status/:batchId :GET to get status messages for a batch with batchId
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  batchStatusController
    .getBatchStatus(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
