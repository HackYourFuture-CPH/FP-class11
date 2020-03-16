
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reservation').del()
    .then(function () {
      // Inserts seed entries
      return knex('reservation').insert([
        { id: 1, number_of_guests: 6, meal_id: 1, created_date: '2019-08-20 00:00:00' },
        { id: 2, number_of_guests: 10, meal_id: 3, created_date: '2019-08-21 00:00:00' },
        { id: 3, number_of_guests: 3, meal_id: 2, created_date: '2019-08-22 00:00:00' },
        { id: 4, number_of_guests: 2, meal_id: 4, created_date: '2019-08-23 00:00:00' },
        { id: 5, number_of_guests: 5, meal_id: 1, created_date: '2019-08-24 00:00:00' },
      ]);
    });
};
