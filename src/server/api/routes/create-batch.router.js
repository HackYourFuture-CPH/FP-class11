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
 *  post:
 *    summary:
 *      Post values received from add batch form fields
 *    description:
 *      Post following values received from add batch form fields&#58; crop id,
 *      customer name, number of seeded pots, start seed date with the userId received from header.
 *
 *
 *      Authentication&#58; <code>super_admin</code> <code>admin</code>
 *    tags:
 *      - Batches
 *    operationId: createBatch
 *    produces: application/json
 *    parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - in: body
 *        name: batch
 *        description: Batch info
 *        schema:
 *          type: object
 *          properties:
 *            fk_crop_id:
 *              type: integer
 *              example: 1
 *            fk_user_id:
 *              type: integer
 *              example: 1
 *            customer_name:
 *              type: string
 *            number_of_seeded_pots:
 *              type: integer
 *              example: 10
 *            seeding_date:
 *              type: string
 *              format: date-time
 *          required:
 *            - fk_crop_id
 *              fk_user_id
 *              customer_name
 *              number_of_seeded_pots
 *              seeding_date
 *    security:
 *      firebase_auth:
 *        - write
 *    responses:
 *      200:
 *        description: Successful request
 *      401:
 *        description: Unauthorized request.
 *      404:
 *        description: Not found.
 *      5XX:
 *        description: Unexpected error.
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
