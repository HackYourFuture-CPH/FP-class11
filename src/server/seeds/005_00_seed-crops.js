exports.seed = function(knex) {
  return knex('crops')
    .del()
    .then(function() {
      return knex('crops').insert([
        {
          name: 'Lettuce ',
          plant_variety: 'Asteraceae',
          fk_user_id: '2',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
          deleted_at: null,
        },
        {
          name: 'Shiso ',
          plant_variety: 'Lamiaceae',
          fk_user_id: '2',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
          deleted_at: null,
        },
      ]);
    });
};
