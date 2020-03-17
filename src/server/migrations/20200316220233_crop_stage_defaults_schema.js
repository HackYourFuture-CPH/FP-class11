exports.up = function(knex) {
  return knex.schema.alterTable('crop_stage_defaults', function(table) {
    table
      .increments('id')
      .primary()
      .unsigned()
      .notNullable();
    table.integer('fk_crop_id');
    table.integer('fk_crop_stage_id');
    table.varchar('parameter', 255).notNullable();
    table.double('min_value').notNullable();
    table.double('optimum_value').notNullable();
    table.double('max_value').notNullable();
    table.timestamp('updated_at').notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('deleted_at');
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('crop_stage_defaults');
};
