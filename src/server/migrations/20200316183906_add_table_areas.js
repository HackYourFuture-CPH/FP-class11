exports.up = function(knex) {
  return knex.schema.createTable('areas', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .integer('fk_parent_area_id')
      .notNullable()
      .unsigned();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at');
    table
      .foreign('fk_parent_area_id')
      .references('id')
      .inTable('areas');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('areas');
};
