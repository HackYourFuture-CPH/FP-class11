exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('units').insert([
        { name: 'potato', created_at: '2020-03-01', updated_at: '2020-03-07' },
        { name: 'Phaliyaan', created_at: '2020-03-01', updated_at: '2020-03-07' },
        { name: 'Teenda', created_at: '2020-03-01', updated_at: '2020-03-07' },
        { name: 'Kadu', created_at: '2020-03-01', updated_at: '2020-03-07' },
        { name: 'Bhindi', created_at: '2020-03-01', updated_at: '2020-03-07' }

      ]);
    });
};
