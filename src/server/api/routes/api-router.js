const express = require("express");

const router = express.Router();

// Router imports
const modulesRouter = require("./modules.router");
const cropsRouter = require("./crops.router");

// swagger-ui-express
const swaggerDocument = require("../../config/swagger.json");
const swaggerUi = require("swagger-ui-express");

// Route for Swagger API Documentation
router.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use("/modules", modulesRouter);
router.use("/crops", cropsRouter);

module.exports = router;
