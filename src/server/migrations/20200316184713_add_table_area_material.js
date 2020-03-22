exports.up = function(knex) {
  return knex.schema.createTable('area_material', function(table) {
    table.increments('id').primary();
    table
      .string('name')
      .unique()
      .notNullable();
    table
      .integer('fk_area_id')
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
    table.timestamp('deleted_at').defaultTo(knex.fn.now());
    table
      .foreign('fk_area_id')
      .references('id')
      .inTable('areas');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('area_material');
};
