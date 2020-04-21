/* eslint-disable no-console */
const express = require('express');
const Roles = require('../../constants/roles');
const {
  checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const router = express.Router({ mergeParams: true });

// controllers
const deleteSpecificDataController = require('../controllers/delete-specific-batch.controller');

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
