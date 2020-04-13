/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

// ENDPOINT: /api/users/role :GET to get user's role for specific uid/user
router.get('/role', checkIfAuthenticated, (req, res, next) => {
  usersController
    .getRole(req)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
