exports.up = function(knex) {
  return knex.schema.createTable(
    'batch_area_nonreusable_resource_consumption',
    function(table) {
      table
        .increments('id')
        .primary()
        .notNullable();
      table.integer('fk_batch_area_id').notNullable();
      table.integer('fk_material_id').notNullable();
      table.float('quantity').notNullable();
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
      table
        .foreign('fk_material_id')
        .references('id')
        .inTable('material');
    },
  );
};
exports.down = function(knex) {
  return knex.schema.dropTable('batch_area_nonreusable_resource_consumption');
};
