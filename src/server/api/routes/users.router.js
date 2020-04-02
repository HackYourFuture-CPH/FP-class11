/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

// ENDPOINT: /api/users/ :GET to get all users
router.get('/', (req, res, next) => {
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/:uid :GET to get one user for specific uid
router.get('/:uid', (req, res, next) => {
  usersController
    .getRole(req.params.uid)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
