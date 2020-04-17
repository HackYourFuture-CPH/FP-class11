const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');

const router = express.Router();

// Router imports

const modulesRouter = require('./modules.router');
const sensorReadingRouter = require('./sensor-reading.router');
const cropStageDefaultValuesRouter = require('./crop-stage-default-values.router');
const cropStagesEndpoint = require('./crop-stages.router');
const usersRouter = require('./users.router.js');
const batchesRouter = require('./batches.router');
const createBatchRouter = require('./create-batch.router');
const getBatchRouter = require('./batches.router');
const getUnitsRouter = require('./units.router');
const batchDefaultValuesRouter = require('./batch-default-values.router');

// swagger-ui-express
// const swaggerDocument = require('../../config/swagger.json');

const swaggerOptions = {
  basePath: '/api',
  swaggerDefinition: {
    info: {
      title: 'Units API',
      version: '2.0',
      description: 'Units API information',
      host: 'http//localhost:5000',
    },
  },
  apis: ['api-router.js'],
};

const swaggerUi = require('swagger-ui-express');

const swaggerDoc = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Application routes

/**
 * @swagger
 * /units:
 *      get:
 *          description: This should return all units  *
 *      response:
 *          '200':
 *           description:A successful response
 */

router.use('/units', getUnitsRouter);
router.use('/modules', modulesRouter);
router.use('/batches', batchesRouter);
router.use('/crop-stages', cropStagesEndpoint);
router.use('/sensor-reading', sensorReadingRouter);
router.use('/crop-stage-parameter-values', cropStageDefaultValuesRouter);
router.use('/users', usersRouter);
router.use('/create-batch', createBatchRouter);
router.use('/batch', getBatchRouter);
router.use('/batch-default-values', batchDefaultValuesRouter);

module.exports = router;
