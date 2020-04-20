/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

// controllers
const cropsController = require('../controllers/crops.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /crops/:
 *   get:
 *     summary: Get all crops
 *     description:
 *       Get all crops
 *     tags:
 *       - Crops
 *     operationId: getAllCrops
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
// ENDPOINT: /api/crops/ :GET to get all crops
router.get('/', checkIfAuthenticated, (req, res, next) => {
  cropsController
    .getAllCrops()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
