exports.up = function(knex) {
  return knex.schema.alterTable('crop_stages', (table) => {
    table
      .enu('name', [
        'seeding',
        'propagation',
        'maturity',
        'harvest',
        'storage',
        'delivery',
      ])
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema
    .table('crop_stages', function(table) {
      table.dropColumn('name');
    })
    .then(() => {
      return knex.schema.table('crop_stages', function(table) {
        table
          .enu('name', [
            'seeding',
            'propagation',
            'meturity',
            'harvesting',
            'delivery',
          ])
          .notNullable();
      });
    });
};
