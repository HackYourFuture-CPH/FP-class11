exports.up = function(knex) {
  return knex.schema.createTable('crop_stage_default_values', (table) => {
    table
      .increments('id')
      .notNullable()
      .unsigned()
      .primary();
    table
      .integer('fk_crop_id')
      .notNullable()
      .unsigned();
    table
      .integer('fk_crop_stage_id')
      .notNullable()
      .unsigned();
    table.string('parameter').notNullable();
    table.double('min_value').notNullable();
    table.double('optimum_value').notNullable();
    table.double('max_value').notNullable();
    table.timestamp('created_at').notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('deleted_at')
      .defaultTo(null)
      .nullable();
    table
      .foreign('fk_crop_id')
      .references('id')
      .inTable('crops');
    table
      .foreign('fk_crop_stage_id')
      .references('id')
      .inTable('crop_stages');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('crop_stage_default_values');
};
