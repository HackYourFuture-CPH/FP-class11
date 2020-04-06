exports.up = function(knex) {
  return knex.schema.createTable('units', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned()
      .notNullable();
    table
      .string('name')
      .unique()
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())

      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('units');
};
