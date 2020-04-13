const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const sensorReadingRouter = require('./sensor-reading.router');
const cropStageDefaultValuesRouter = require('./crop-stage-default-values.router');
const deleteSpecificBatchDataRouter = require('./delete-specfic-batch.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');
const swaggerUi = require('swagger-ui-express');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);
router.use('/sensor-reading', sensorReadingRouter);
router.use('/crop-stage-parameter-values', cropStageDefaultValuesRouter);
router.use('/delete-specific-data', deleteSpecificBatchDataRouter);

module.exports = router;
