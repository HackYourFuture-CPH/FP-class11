/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageDefaultValuesController = require('../controllers/crop-stage-default-values.controller');
/**
 * @swagger
 * /crop-stage-parameter-values/{cropId}:
 *   get:
 *     summary: Get default parameter values for a specific crop
 *     description:
 *       Get default parameter values for a specific crop by cropId
 *     tags:
 *       - CropDefaultValues
 *     operationId: getCropStageDefaultValuesByCropId
 *     produces: application/json
 *     parameters:
 *      - name: cropId
 *        id: path
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
router.get('/:cropId', (req, res, next) => {
  cropStageDefaultValuesController
    .getCropStageDefaultValuesByCropId(req.params.cropId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
