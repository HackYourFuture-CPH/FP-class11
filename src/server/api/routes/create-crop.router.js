/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const ROLES = require('../../constants/roles');

// controllers
const createCropController = require('../controllers/create-crop.controller');

/**
 * @swagger
 * /create-crop:
 *  post:
 *    summary:
 *      Creates a crop from values received from add crop form fields
 *    description:
 *      Post following values received from add crop form fields&#58;
 *      name, plant variety with the userId received from header.
 *
 *
 *      Authentication&#58; <code>super_admin</code> <code>admin</code>
 *    tags:
 *      - Crops
 *    operationId: createCrop
 *    produces: application/json
 *    parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - in: body
 *        name: crops
 *        description: Crop info
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            plant_variety:
 *              type: string
 *            fk_user_id:
 *              type: integer
 *              example: 1
 *            created_at:
 *              type: string
 *              format: date-time
 *            updated_at:
 *              type: string
 *              format: date-time
 *            deleted_at:
 *              type: string
 *              format: date-time
 *          required:
 *            - name
 *              plant_variety
 *              fk_user_id
 *              created_at
 *              updated_at
 *              deleted_at
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
    createCropController
      .createCrop(req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
);

module.exports = router;
