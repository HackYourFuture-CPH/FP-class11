const express = require('express');

const router = express.Router();

const mealsRouter = require('./meals.router');

router.use('/meals', mealsRouter);

module.exports = router;
