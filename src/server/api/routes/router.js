const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');

router.use('/modules', modulesRouter);

module.exports = router;
