exports.seed = function(knex) {
  return knex('user_roles')
    .del()
    .then(function() {
      return knex('user_roles').insert([
        {
          id: '1',
          fk_role_id: '1',
          fk_user_id: '1',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '2',
          fk_role_id: '2',
          fk_user_id: '2',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '3',
          fk_role_id: '2',
          fk_user_id: '3',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '4',
          fk_role_id: '3',
          fk_user_id: '4',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '5',
          fk_role_id: '3',
          fk_user_id: '5',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
      ]);
    });
};
