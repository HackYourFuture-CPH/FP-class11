exports.seed = function (knex) {
  return knex('crop_stages')
    .del()
    .then(function () {
      return knex('crop_stages').insert([
        {
          id: '1',
          fk_crops_id: '1',
          name: 'seeding',
          duration: '1',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
        {
          id: '2',
          fk_crops_id: '1',
          name: 'propagation',
          duration: '2',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
        {
          id: '3',
          fk_crops_id: '1',
          name: 'maturity',
          duration: '3',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
        {
          id: '4',
          fk_crops_id: '1',
          name: 'harvest',
          duration: '4',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
        {
          id: '5',
          fk_crops_id: '1',
          name: 'storage',
          duration: '1',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
        {
          id: '6',
          fk_crops_id: '1',
          name: 'delivery',
          duration: '1',
          created_at: '2020-03-16 21:03:56',
          updated_at: '2020-03-16 21:03:56',
        },
      ]);
    });
};
