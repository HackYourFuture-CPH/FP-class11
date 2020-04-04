/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const modulesController = require('../controllers/modules.controller');

// ENDPOINT: /api/modules/ :GET to get all modules
router.get('/', (req, res, next) => {
  modulesController
    .getModules()
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

// ENDPOINT: /api/modules/ :POST
router.post('/', (req, res) => {
  modulesController
    .createModule(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

// ENDPOINT: /api/modules/ :PATCH
router.patch('/:id', (req, res, next) => {
  modulesController
    .editModule(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :DELETE
router.delete('/:id', (req, res) => {
  modulesController
    .deleteModule(req.params.id, req)
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
