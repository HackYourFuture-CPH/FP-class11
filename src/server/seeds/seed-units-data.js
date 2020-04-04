exports.seed = function (knex) {
  return knex('units')
    .del()
    .then(function () {
      return knex('units').insert([
        {
          id: '1',
          name: 'milligram',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '2',
          name: 'gram',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '3',
          name: 'kilogram',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '4',
          name: 'millimeter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '5',
          name: 'centimeter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '6',
          name: 'meter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '7',
          name: 'centigrade',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '8',
          name: 'fahrenheit',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '9',
          name: 'milliliter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '10',
          name: 'centiliter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '11',
          name: 'deciliter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '12',
          name: 'liter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '13',
          name: 'piece',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '14',
          name: 'cubic_meter',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '15',
          name: 'ph_scale',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '16',
          name: 'ec_scale',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
        {
          id: '17',
          name: 'wl_scale',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
        },
      ]);
    });
};
