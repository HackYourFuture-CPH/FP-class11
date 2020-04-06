exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('materials').insert([
        {
          id: '1',
          name: 'sensor_temperature',
          fk_unit_id: '7',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '2',
          name: 'sensor_humidity',
          fk_unit_id: '7',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '3',
          name: 'sensor_ph',
          fk_unit_id: '15',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '4',
          name: 'sensor_ec',
          fk_unit_id: '16',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
        {
          id: '5',
          name: 'sensor_water_level',
          fk_unit_id: '17',
          created_at: '2020-03-16 21:03:57',
          updated_at: '2020-03-16 21:03:57',
          deleted_at: null,
        },
      ]);
    });
};
