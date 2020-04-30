/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageModuleController = require('../controllers/modules.controller.crop-stages-endpoint');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /crop-stages/{batchId}:
 *   get:
 *     summary: Get crop stages
 *     description:
 *       Get crop stages.
 *
 *
 *       Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - Crops
 *     operationId: batchId
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
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/crop-stages/:batchId :GET to get one Batch
router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  cropStageModuleController
    .getCropStages(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
