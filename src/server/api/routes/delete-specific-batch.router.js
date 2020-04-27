/* eslint-disable no-console */
const express = require('express');
const ROLES = require('../../constants/roles');
const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const router = express.Router({ mergeParams: true });

// controllers
const deleteSpecificBatchController = require('../controllers/delete-specific-batch.controller');

/**
 * @swagger
 * /delete-specific-batch/{batchId}:
 *   patch:
 *     summary: Delete a batch by id number
 *     description:
 *       Delete a batch by batch id number
 *
 *
 *        Authentication&#58; <code>super_admin</code> only.
 *     tags:
 *       - Batches
 *     operationId: deleteSpecificBatchById
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
 *         firebase_auth:
 *         - write
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: Unauthorized request.
 *       404:
 *         description: Not found.
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/delete-specific-batch/{batchId} :PATCH
router.patch(
  '/:batchId',
  checkIfAuthorized(ROLES.SUPER_ADMIN),
  (req, res, next) => {
    deleteSpecificBatchController
      .deleteSpecificBatchById(req.params.batchId)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
