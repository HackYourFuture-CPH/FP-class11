const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const cropStageDefaultValuesRouter = require('./crop-stage-default-values.router');
const usersRouter = require('./users.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');
const swaggerUi = require('swagger-ui-express');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);
router.use('/crop-stage-parameter-values', cropStageDefaultValuesRouter);
router.use('/users', usersRouter);

module.exports = router;
