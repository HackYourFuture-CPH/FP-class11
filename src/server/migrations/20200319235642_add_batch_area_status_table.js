exports.up = function(knex) {
  return knex.schema.createTable('batch_area_status', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.integer('fk_batch_area_id').notNullable();
    table.enu('stage');
    table.integer('quantity').notNullable();
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
      .foreign('fk_batch_area_id')
      .references('id')
      .inTable('batch_areas');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('batch_area_status');
};
