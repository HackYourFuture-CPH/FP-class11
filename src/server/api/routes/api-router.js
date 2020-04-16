const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const sensorReadingRouter = require('./sensor-reading.router');
const cropStageDefaultValuesRouter = require('./crop-stage-default-values.router');
const cropStagesEndpoint = require('./crop-stages.router');
const usersRouter = require('./users.router.js');
const createBatchRouter = require('./create-batch.router');
const getBatchRouter = require('./batches.router');
const statusBoXRouter = require('./status-box.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');
const swaggerUi = require('swagger-ui-express');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);
router.use('/crop-stages', cropStagesEndpoint);
router.use('/sensor-reading', sensorReadingRouter);
router.use('/crop-stage-parameter-values', cropStageDefaultValuesRouter);
router.use('/users', usersRouter);
router.use('/create-batch', createBatchRouter);
router.use('/batch', getBatchRouter);
router.use('/status-box/', statusBoXRouter);

module.exports = router;
