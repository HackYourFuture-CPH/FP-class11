exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('crops')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('crops').insert([
        {
          name: 'the name',
          plant_variety: 'some 23variety',
          fk_user_id: 3,
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          name: 'the other name',
          plant_variety: 'some 7345variety',
          fk_user_id: 2,
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          name: 'rowValue1',
          plant_variety: 'some 23variety',
          fk_user_id: 1,
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
      ]);
    });
};
