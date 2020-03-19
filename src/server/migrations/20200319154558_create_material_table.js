exports.up = function(knex) {
  return knex.schema.createTable('material', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('company_name', 255).notNullable();
    table
      .integer('fk_unit_id')
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
      .foreign('fk_unit_id')
      .references('id')
      .inTable('units');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('material');
};
