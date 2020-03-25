exports.up = function(knex) {
  return knex.schema.createTable('roles', function(table) {
    table
      .increments('id')
      .notNullable()
      .primary();
    table.string('name').notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};
