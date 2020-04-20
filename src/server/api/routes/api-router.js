const express = require('express');

const router = express.Router();

// Router imports
const deleteSpecificBatchDataRouter = require('./delete-specfic-batch.router');

// swagger-ui-express
// const swaggerDocument = require('../../config/swagger.json');
// const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {
    firebase_auth: {
      type: 'oauth2',
      authorizationUrl: 'seasony-login.firebaseapp.com',
      description: 'This API uses OAuth 2.',
      flows: 'authorizationCode',
      scopes: {
        read: 'read data based on user uid',
        write: 'write data based on user uid',
      },
    },
  },
  apis: ['./src/server/api/routes/*.js'],
};

// Route for Swagger API Documentation
const swaggerDocument = swaggerJsDoc(swaggerOptions);
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/delete-specific-data', deleteSpecificBatchDataRouter);

module.exports = router;
