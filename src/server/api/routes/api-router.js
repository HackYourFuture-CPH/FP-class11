const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const sensorReadingRouter = require('./sensor-reading.router');
const cropStageDefaultValuesRouter = require('./crop-stage-default-values.router');
const cropsRouter = require('./crops.router');
const cropStagesEndpoint = require('./crop-stages.router');
const usersRouter = require('./users.router.js');
const batchesRouter = require('./batches.router');
const createBatchRouter = require('./create-batch.router');
const getBatchRouter = require('./batches.router');
const batchDefaultValuesRouter = require('./batch-default-values.router');
const batchStatusRouter = require('./batch-status.router');
const deleteSpecificBatchDataRouter = require('./delete-specific-batch.router');

// Application routes
router.use('/modules', modulesRouter);
router.use('/batches', batchesRouter);
router.use('/crop-stages', cropStagesEndpoint);
router.use('/sensor-reading', sensorReadingRouter);
router.use('/crop-stage-parameter-values', cropStageDefaultValuesRouter);
router.use('/crops', cropsRouter);
router.use('/users', usersRouter);
router.use('/create-batch', createBatchRouter);
router.use('/batch', getBatchRouter);
router.use('/batch-default-values', batchDefaultValuesRouter);
router.use('/batch-status/', batchStatusRouter);
router.use('/delete-specific-batch', deleteSpecificBatchDataRouter);

// swagger-ui-express
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

module.exports = router;
