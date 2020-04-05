exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('batches')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('batches').insert([
        {
          id: '1',
          fk_crop_id: '1',
          fk_user_id: '2',
          customer_name: 'Italian cucine',
          number_of_seeded_pots: '50',
          seeding_date: '2020-04-01 00:00:00',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '2',
          fk_crop_id: '2',
          fk_user_id: '2',
          customer_name: 'Mexican tacos',
          number_of_seeded_pots: '50',
          seeding_date: '2020-05-01 00:00:00',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '3',
          fk_crop_id: '1',
          fk_user_id: '2',
          customer_name: 'Turkish Kebab',
          number_of_seeded_pots: '50',
          seeding_date: '2020-06-01 00:00:00',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
