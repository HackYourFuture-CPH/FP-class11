exports.up = function(knex) {
  return knex.schema.createTable('area_material_logs', function(table) {
    table.increments('id').primary();
    table
      .integer('fk_batch_area_crop_stage_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_area_material_id')
      .notNullable()
      .unsigned();
    table.string('entry').notNullable();
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
      .foreign('fk_area_material_id')
      .references('id')
      .inTable('area_material');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('area_material_logs');
};
