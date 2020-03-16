
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        { id: 1, title: 'FREE Vegeterian FOOD', description: 'Iranian vegeterian food', location: 'Rektorparken 20', when: '2019-08-20 00:00:00', max_reservations: 10, price: 100.0000, created_date: '2019-07-20 00:00:00' },
        { id: 2, title: 'Brazilian Food', description: 'Delicious meal with an special drink', location: 'Lyngby 21', when: '2019-08-03 00:00:00', max_reservations: 9, price: 70.0000, created_date: '2019-07-10 00:00:00' },
        { id: 3, title: 'DANISH PORK MEATBALLS', description: 'Traditional Nordic recipe for Meatballs also known as Frikadeller', location: 'Valbyparken', when: '2019-09-10 00:00:00', max_reservations: 18, price: 85.0000, created_date: '2019-08-03 00:00:00' },
        { id: 4, title: 'English clam chowder', description: 'Traditional English Clam Chowder ', location: 'Kalampenborgvej 30', when: '2019-08-12 00:00:00', max_reservations: 15, price: 85.0000, created_date: '2019-07-12 00:00:00' },
        { id: 5, title: 'Sushi with drink', description: 'Deep Fried Sushi', location: 'Nordhavn 10', when: '2019-09-06 00:00:00', max_reservations: 20, price: 120.0000, created_date: '2019-08-12 00:00:00' },
      ]);
    });
};
