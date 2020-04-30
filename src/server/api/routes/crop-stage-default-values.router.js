/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageDefaultValuesController = require('../controllers/crop-stage-default-values.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /crop-stage-parameter-values/{cropId}:
 *   get:
 *     summary: Get default values for a specific crop
 *     description:
 *       Get default parameter values for a specific crop by cropId
 *
 *
 *       Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - Default Values
 *     operationId: getCropStageDefaultValuesByCropId
 *     produces: application/json
 *     parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - name: cropId
 *        in: path
 *        type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: Authorization information is missing or invalid.
 *       404:
 *         description: A batch with the specified id was not found.
 *       5XX:
 *         description: Unexpected error.
 *     security:
 *         firebase_auth:
 *         - read
 */
// ENDPOINT: /api/modules/:cropId :GET to get one crop's default values
router.get('/:cropId', checkIfAuthenticated, (req, res, next) => {
  cropStageDefaultValuesController
    .getCropStageDefaultValuesByCropId(req.params.cropId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
