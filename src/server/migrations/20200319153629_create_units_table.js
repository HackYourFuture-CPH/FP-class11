exports.up = function(knex) {
  return knex.schema.createTable('units', (table) => {
    table
      .increments('id')
      .notNullable()
      .primary();
    table
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('units');
};
