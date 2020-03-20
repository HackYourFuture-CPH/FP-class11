exports.up = function(knex) {
  return knex.schema.createTable('batch_area_crop_stages', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.integer('fk_crop_stage_id').notNullable();
    table.integer('fk_batch_area_id').notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .foreign('fk_crop_stage_id')
      .references('id')
      .inTable('crop_stages');
    table
      .foreign('fk_batch_area_id')
      .references('id')
      .inTable('batch_areas');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('batch_area_crop_stages');
};
