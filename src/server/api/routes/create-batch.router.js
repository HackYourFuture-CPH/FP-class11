const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const ROLES = require('../../constants/roles');

// controllers
const createBatchController = require('../controllers/create-batch.controller');

/**
 * @swagger
 * /create-batch:
 *   post:
 *     summary: Post values received from add batch form fields
 *     description:
 *       'Post following values received from add batch form fields: crop id,
 *       customer name, number of seeded pots, start seed date with the userId received from header.'
 *     tags:
 *       - CreateBatch
 *     operationId: createBatch
 *     produces: application/json
 *     parameters:
 *      - name: authorization
 *        id: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - name: cropId
 *        in: body
 *        type: integer
 *        required: true
 *      - name: userId
 *        in: body
 *        type: integer
 *        required: true
 *      - name: customerName
 *        in: body
 *        type: string
 *        required: true
 *      - name: seedPot
 *        in: body
 *        type: integer
 *        required: true
 *      - name: startSeedDate
 *        in: body
 *        type: integer
 *        required: true
 *     security:
 *         firebase_auth:
 *         - read
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
// ENDPOINT: /api/create-batch :POST to create a batch
router.post(
  '/',
  checkIfAuthorized(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  (req, res, next) => {
    createBatchController
      .createBatch(req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
