exports.seed = function(knex) {
  return knex('roles')
    .del()
    .then(function() {
      return knex('roles').insert([
        {
          id: '1',
          name: 'super_admin',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
        },
        {
          id: '2',
          name: 'admin',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
        },
        {
          id: '3',
          name: 'user',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
        },
      ]);
    });
};
