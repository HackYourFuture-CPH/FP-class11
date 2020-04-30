/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /users/role:
 *   get:
 *     summary: Get a role for specific user by uid
 *     description: Get a role for specific user by uid
 *
 *
 *        Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - User
 *     operationId: getRole
 *     produces:
 *       - application/json
 *       - name: admin
 *     parameters:
 *       - name: authorization
 *         in: header
 *         description: Firebase token
 *         required: true
 *         type: string
 *         default: Bearer ENTER_FIREBASE_TOKEN
 *     responses:
 *       200:
 *         description: Role returned.
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: A user with the specified uid was not found.
 *       5XX:
 *         description: Unexpected error.
 *     security:
 *        -firebase_auth:
 *        - read
 */
// ENDPOINT: /api/users/role :GET to get user's role for specific uid/user
router.get('/role', checkIfAuthenticated, (req, res, next) => {
  usersController
    .getRole(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/name:
 *   get:
 *     summary: Get a name for specific user by uid
 *     description: Get a name for specific user by uid
 *
 *
 *       Authentication&#58; <code>super_admin</code> <code>admin</code> <code>user</code>
 *     tags:
 *       - User
 *     operationId: getName
 *     produces:
 *       application/json
 *     parameters:
 *       - name: authorization
 *         in: header
 *         description: Firebase token
 *         required: true
 *         type: string
 *         default: Bearer ENTER_FIREBASE_TOKEN
 *     responses:
 *       200:
 *         description: User returned.
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: Name not found.
 *       5XX:
 *         description: Unexpected error.
 *     security:
 *        firebase_auth:
 *        - read
 */
// ENDPOINT: /api/users/name/:uid :GET to get name of the user by UID
router.get('/name', checkIfAuthenticated, (req, res, next) => {
  usersController
    .getName(req)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/id/:uid :GET to get id of the user by UID
router.get('/id', checkIfAuthenticated, (req, res, next) => {
  usersController
    .getUserId(req)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
