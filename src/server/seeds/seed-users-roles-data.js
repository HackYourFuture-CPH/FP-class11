exports.seed = function (knex) {
  return knex('user_roles')
    .del()
    .then(function () {
      return knex('user_roles').insert([
        { fk_user_id: 1, fk_role_id: 1 },
        { fk_user_id: 2, fk_role_id: 2 },
        { fk_user_id: 3, fk_role_id: 2 },
        { fk_user_id: 4, fk_role_id: 3 },
        { fk_user_id: 5, fk_role_id: 3 },
      ]);
    });
};
