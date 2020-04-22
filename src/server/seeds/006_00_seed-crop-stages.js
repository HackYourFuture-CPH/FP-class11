exports.seed = function(knex) {
  return knex('crop_stages')
    .del()
    .then(function() {
      return knex('crop_stages').insert([
        {
          fk_crop_id: '1',
          name: 'seeding',
          duration: '1',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '1',
          name: 'propagation',
          duration: '4',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '1',
          name: 'maturity',
          duration: '6',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '1',
          name: 'harvest',
          duration: '6',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '1',
          name: 'storage',
          duration: '1',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '1',
          name: 'delivery',
          duration: '1',
          created_at: '2020-04-20 21:03:56',
          updated_at: '2020-04-20 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'seeding',
          duration: '1',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'propagation',
          duration: '4',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'maturity',
          duration: '6',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'harvest',
          duration: '6',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'storage',
          duration: '1',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
        {
          fk_crop_id: '2',
          name: 'delivery',
          duration: '1',
          created_at: '2020-04-21 21:03:56',
          updated_at: '2020-04-21 21:03:56',
        },
      ]);
    });
};
