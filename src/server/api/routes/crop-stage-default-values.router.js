/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageDefaultValuesController = require('../controllers/crop-stage-default-values.controller');
const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/modules/:cropId :GET to get one crop's default values
router.get('/:cropId', checkIfAuthenticated, (req, res, next) => {
  cropStageDefaultValuesController
    .getCropStageDefaultValuesByCropId(req.params.cropId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
