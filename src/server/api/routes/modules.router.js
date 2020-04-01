/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const modulesController = require('../controllers/modules.controller');
const cropStageModuleController = require('../controllers/modules.controller.crop-stages-endpoint');

// ENDPOINT: /api/modules/ :GET to get all modules
router.get('/', (req, res, next) => {
  cropStageModuleController
    .getCropStages()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/modules/:id :GET to get one module
router.get('/:id', (req, res, next) => {
  modulesController
    .getModuleById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
