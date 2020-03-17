exports.up = function(knex) {
  return knex.schema.createTable('units', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned()
      .notNullable();
    table
      .varchar('name')
      .unique()
      .notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('units');
};
