/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const mealsController = require('../controllers/meals.controller');

// ENDPOINT: /api/meals/ :GET to get all meals
router.get('/', (req, res, next) => {
  mealsController
    .getMeals()
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/meals/:id :GET to get one meal
router.get('/:id', (req, res, next) => {
  mealsController
    .getMealById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/meals/ :POST
router.post('/', (req, res) => {
  mealsController
    .createMeal(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

// ENDPOINT: /api/meals/ :PATCH
router.patch('/:id', (req, res, next) => {
  mealsController
    .editMeal(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :DELETE
router.delete('/:id', (req, res) => {
  mealsController
    .deleteMeal(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the meal id does not exist
      if (result === 0) {
        res.status(404).send('The meal ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
