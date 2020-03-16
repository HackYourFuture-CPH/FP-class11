const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getMeals = async () => {
  try {
    return await knex('meal').select('meal.id', 'meal.title');
  } catch (error) {
    return error.message;
  }
};

const getMealById = async (id) => {
  try {
    const meals = await knex('meal')
      .select('meal.id as id', 'title')
      .where({ id });
    if (meals.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return meals;
  } catch (error) {
    return error.message;
  }
};

const editMeal = async (mealId, updatedMeal) => {
  return knex('meal')
    .where({ id: mealId })
    .update({
      title: updatedMeal.title,
      description: updatedMeal.description,
      location: updatedMeal.location,
      price: updatedMeal.price,
      max_reservations: updatedMeal.max_reservations,
    });
};

const deleteMeal = async (mealId) => {
  return knex('meal')
    .where({ id: mealId })
    .del();
};

const createMeal = async (body) => {
  await knex('meal').insert({
    title: body.title,
    description: body.description,
    location: body.location,
    price: body.price,
    max_reservations: body.max_reservations,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getMeals,
  getMealById,
  deleteMeal,
  createMeal,
  editMeal,
};
