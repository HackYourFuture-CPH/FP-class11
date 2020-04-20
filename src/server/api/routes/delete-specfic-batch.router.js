/* eslint-disable no-console */
const express = require('express');
const Roles = require('../../constants/roles');
const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const router = express.Router({ mergeParams: true });

// controllers
const deleteSpecificDataController = require('../controllers/delete-specific-batch.controller');

/**
 * @swagger
 * /delete-specific-batch/{batchId}:
 *   delete:
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
// ENDPOINT: /api/example/ :DELETE
router.delete('/:batchid', checkIfAuthorized(Roles.SUPER_ADMIN), (req, res) => {
  deleteSpecificDataController
    .deleteSpecificBatchById(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the module id does not exist
      if (result === 0) {
        res.status(404).send('The module ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
