/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cropStageDefaultValuesController = require('../controllers/crop-stage-default-values.controller');

// ENDPOINT: /api/modules/:cropId :GET to get one crop's default values
router.get('/:cropId', (req, res, next) => {
  cropStageDefaultValuesController
    .getCropStageDefaultValuesByCropId(req.params.cropId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
