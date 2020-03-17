exports.up = function(knex) {
  return knex.schema.createTable('batch_area_crop_stages', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned()
      .notNullable();
    table.integer('fk_crop_stage_id');
    table.integer('fk_batch_area_id').notNullable();
    table.timestamp('created_at').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('batch_area_crop_stages');
};
