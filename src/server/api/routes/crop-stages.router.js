/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageModuleController = require('../controllers/modules.controller.crop-stages-endpoint');
const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/crop-stages/:batchId :GET to get one Batch

router.get('/:batchId', checkIfAuthenticated, (req, res, next) => {
  cropStageModuleController
    .getCropStages(req.params.batchId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
